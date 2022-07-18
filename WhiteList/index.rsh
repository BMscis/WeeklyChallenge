'reach 0.1';
const CLUB_DIVIDENCE = 30

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const Bob = Participant('Bob', {
        entranceFee : Fun([],Tuple(UInt,UInt,Token)),
        ready : Fun([Contract], Null),
        clubEnded: Fun([Token],Null)

     })
    const CanIJoin = API('CanIJoin',{
        AskToJoin : Fun([UInt], Bool)
    })
    const WhiteListView = View('WhiteListView',{
        showWhiteList : Address,
    })
    const Notification = Events("Notification",{
        ContractState : [Address, Bool, UInt],
    })
    init()
    Bob.only(()=> {
        const AdminAddress = this
        const [EF,Jamount,JID] = declassify(interact.entranceFee())
    })
    Bob.publish(EF,AdminAddress,Jamount,JID)
    commit()
    Bob.pay([EF,[Jamount, JID]])
    assert(balance() == EF)

    const whitelist = new Set()
    whitelist.insert(AdminAddress)
    WhiteListView.showWhiteList.set(Bob)
    Bob.interact.ready(getContract())

    const end = lastConsensusTime() + 10;

    const [first,newMember,howMany,entrance] = parallelReduce([true,AdminAddress,1,EF])
      .invariant(balance() == balance())
      .invariant(balance(JID) == balance(JID))
      .while(lastConsensusTime() <= end)
      .api(CanIJoin.AskToJoin,
        ((ent) => {
            assume(ent >= entrance, "Sorry, the club is full")
        }),
        ((ent)=>ent),
        ((ent,fn)=>{
            require(ent >= entrance, "Sorry, the club is full")
            if(!whitelist.member(this)){
                whitelist.insert(this)
                fn(true)
                Notification.ContractState(this, true,balance(JID))
                return [false ,this,howMany + 1,balance(JID)]
            }
            else{
                fn(false)
                Notification.ContractState(this, false,balance(JID))
                return [true,newMember,howMany,entrance]
            }
        })
      ).timeout(absoluteTime(end), () => {
        Bob.publish()
        return [first,newMember,howMany,entrance]; 
      });
    const dividence = muldiv(balance(JID), CLUB_DIVIDENCE, 100)
    //transfer(balance(JID) * CLUB_DIVIDENCE,JID).to(newMember)
    transfer(dividence, JID).to(newMember)
    transfer(balance(JID), JID).to(Bob)
    transfer(balance()).to(Bob)
    Bob.interact.clubEnded(JID)
    commit();
    exit();
})

