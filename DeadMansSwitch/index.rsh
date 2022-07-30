'reach 0.1';
const common = {
  showTimer : Fun([UInt], Null),
}
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...common,
    inheritance : Fun([],Tuple(UInt)),
    deadOrAlive : Fun([], Bool),
    AGotTheFunds : Fun([Bytes(5)],Null)

    // Specify Alice's interact interface here
  });
  const B = Participant('Robey', {
    ...common,
    acceptInheritance : Fun([], Bool),
    BGotTheFunds : Fun([Bytes(5)],Null)

    // Specify Robey's interact interface here
  });
  init();
  A.only(()=>{
    const pAmount = declassify(interact.inheritance())
  })
  // The first one to publish deploys the contract
  A.publish(pAmount)
  .pay(pAmount)
  commit();
  B.only(()=>{
    const acI = declassify(interact.acceptInheritance())
  })
  // The second one to publish always attaches
  B.publish(acI);

  const timer = thisConsensusTime() + 20
  const [ timeRemaining, keepGoing ] = makeDeadline(20);

  each([A,B], () => {
    interact.showTimer(timer - lastConsensusTime())
  });
  commit()

  A.publish()
  .when(acI)
  .timeout(timeRemaining(),() => closeTo(A, () => {
    A.interact.AGotTheFunds("Alice")
  }))
  const [isH] = parallelReduce([ false ])
    .invariant(balance() == balance())
    .while(keepGoing())
    .case(A,
      (() => ({
              when: declassify(interact.deadOrAlive()),
      })),
      ((_) => 0),
      ((_) => {
        each([A,B], () => {
          interact.showTimer(timer - lastConsensusTime())
        })
        return [true]
      }))
     .timeout(timeRemaining(), () => {
       A.publish()
       return [false]
     });

  if(isH){
    transfer(balance()).to(A)
    A.interact.AGotTheFunds("Alice")

  }else{
    transfer(balance()).to(B)
    B.interact.BGotTheFunds("Robey")

  }
  commit()
  exit();
});
