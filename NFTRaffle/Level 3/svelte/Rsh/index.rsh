'reach 0.1';

const common = {
  showResult:Fun([Bool,UInt,Bytes(1)],Null)
}
const [isEligible, ZERO,ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE,TEN] = makeEnum(11)
const amt = 1
export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const A = Participant('A', {
    //...common,
    ...hasRandom,
    getToken : Fun([],Tuple(Token,UInt)),
    showCommitment : Fun([Digest], Null),
    showTicket : Fun([UInt], Null),
    chooseNumber : Fun([Bytes(1)],UInt)
  });
  const B = API('B', {
    //...common,
    playRaffle : Fun([UInt],Bool),
    tryYourLuck: Fun([UInt], Tuple(Bool,UInt))
  });
  const E = Events('E',{
    ticketPulled:[Bytes(2),UInt],
    showTicket: [Bytes(2),UInt],
    showWinner:[Bytes(2),Address]
  })
  init();
  A.only(() => {
    const [token, tickets] = declassify(interact.getToken())
    const _winningTicket = interact.chooseNumber('A')
    const [_commitA, _saltA] = makeCommitment(interact, _winningTicket);
    const commitA = declassify(_commitA);
  })
  A.publish(token, tickets)
  commit();
  A.publish(commitA).pay([0,[amt, token]])
  A.interact.showCommitment(commitA)

  const bingo = new Map(UInt)
  const trys = new Set()
  commit();

  A.publish()
  const [ticketNum] = parallelReduce([ 0 ])
    .invariant(balance(token) == amt)
    .while(ticketNum < tickets)
    .api(B.playRaffle,
      ((num) => {
        assume(!trys.member(this) ,"You have placed a bid already.")
        assume(isEligible(num),"The number is out of range")
      }),
      ((num) => 0),
      ((num,fn) => {
        require(!trys.member(this) ,"You have placed a bid already.")
        require(isEligible(num),"The number is out of range")
        trys.insert(this)
        bingo[this] = num
        E.ticketPulled("TP",num)
        fn(true)
        return [ticketNum + 1]
      }))
  commit();
  A.only(() => {
    const saltA = declassify(_saltA);
    const winningTicket = declassify(_winningTicket);
  })
  A.publish(saltA,winningTicket)
  checkCommitment(commitA, saltA, winningTicket)
  A.interact.showTicket(winningTicket)
  E.showTicket('ST',winningTicket)
  const [winner, hasWinner] = parallelReduce([ A,false ])
    .invariant(balance(token) == amt)
    .while(!hasWinner)
    .api(B.tryYourLuck,
      ((x)=> {
        assume(trys.member(this), 
        "Did you participate in the ruffle?")
      }),
      ((x)=> 0),
      ((x,fn)=> {
        require(trys.member(this), 
        "Did you participate in the ruffle?")
        const v = fromSome(bingo[this],12)
        const outcome = v == winningTicket
        outcome ? fn([true,v]) : fn([false,v])
        return outcome ? [this, true] : [winner, false]
      }))
  E.showWinner('SW',winner)
  transfer(amt, token).to(winner)
  transfer(balance()).to(A)
  commit()
  exit();
});
