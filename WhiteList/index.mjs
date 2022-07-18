import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
let timer = false
const members = []
const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const [ accA, accB, accC ] = await stdlib.newTestAccounts(3, startingBalance);
const JTOKEN = await stdlib.launchToken(accA,"JTOKEN","JTK",{supply:startingBalance})
const JID = JTOKEN.id
await accA.tokenAccept(JID)
const participants = [];
const users = [
    ["Bob",  accA],
    ["Alice",accB],
    ["Steve",accC],
]
users.map(pat => participants.push(pat))
//JTOKEN.mint(accB, stdlib.parseCurrency(10))
let done = false
const checkBalance = async () => {
    for ( const [who, acc] of participants ) {
        const [ bal, tkBal ] = await stdlib.balancesOf(acc, [null, JID]);
        console.log("ACCOUNT: ")
        console.log(who,"'s ALGO balance is : ", stdlib.formatCurrency(bal,4))
        console.log(who,"'s JID balance is : ", stdlib.formatCurrency(tkBal,4))
    }
}
const checkAddress = (add) => {
    if (accA.getAddress() == add){return "Bob"}
    if (accB.getAddress() == add){return "Alice"}
    if (accC.getAddress() == add){return "Steve"}
}
const SeeEvent = async ({ when, what }) => {
    switch (what[1]) {
      case true:
        console.log(checkAddress(what[0])," Has joined the exclusive club", " : ",stdlib.formatCurrency(what[2],4))
        members.push([what[0]])
        break;
      case false:
        console.log(checkAddress(what[0])," tried to join the club but he couldn't", " : ",stdlib.formatCurrency(what[2],4))
        break;
    }
    if (timer) {
        process.exit(0);
      }
}
console.log("===========BALANCES BEFORE====================")
await checkBalance()
const ctx = accA.contract(backend)
const getNotified = ctx.e.Notification.ContractState
const newMembers = async (ctx) => {
    const joinClub = async (who,acc, cx, pay) => {
        await acc.tokenAccept(JID)
        const jt = acc.contract(backend,cx)
        try {
            const response = await jt.a.CanIJoin.AskToJoin(stdlib.parseCurrency(pay))
            console.log("Hey, ", checkAddress(acc.getAddress())," Congratulations for joining the club: ", response)
        } catch (error) {
            console.log("Sorry, ", checkAddress(acc.getAddress()), " the club full ")
        }
    }
    await joinClub("Steve",accC,ctx,2)
    await joinClub("Alice",accB,ctx,12)

    while ( ! done ) {
        await stdlib.wait(1);
    }
}

//getNotified.monitor(SeeEvent)

await ctx.p.Bob({
        entranceFee : () => [stdlib.parseCurrency(10),stdlib.parseCurrency(50),JID],
        ready : async (ct) => {
            console.log("Contract Is Ready")
            const whosClub = await ctx.v.WhiteListView.showWhiteList()
            members.push(whosClub[1])
            const BobAdd = accA.getAddress()
            if(BobAdd == whosClub[1]){
                console.log("This is ",checkAddress(whosClub[1]), "'s club.")
            }
            newMembers(ct)
        },
        clubEnded: async(tkn) => {
            timer = true
        }
})

done = true
getNotified.monitor(SeeEvent)
console.log("===========BALANCES AFTER====================")
await checkBalance()