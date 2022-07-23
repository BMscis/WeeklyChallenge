import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib()
const nBal = stdlib.parseCurrency(100);
const [ acc1, acc2, acc3, acc4 , acc5 , acc6 , acc7] = await stdlib.newTestAccounts(7, nBal);
const ctx = await acc1.contract(backend)
let contractConnect
let members = []
let pleaseWait = false
const addMember = async () => {
const request = async (acc) => {
    console.log("Trying to add new member: ", acc.getAddress())
    try {
        const apiCtx = acc.contract(backend,contractConnect)
        const [isAdded,num] = await apiCtx.a.UApi.addUser()
        const pos = stdlib.bigNumberToNumber(num)
        if (isAdded){
            console.log(pos, ": User ",acc.getAddress()," has been added to the list. ", isAdded)
            members.push(acc.getAddress())
        }else{
            console.log(pos, ": User ",acc.getAddress()," has failed to enter the list.", isAdded)
        }
    } catch (error) {
        pleaseWait = true
        console.log("User ", acc.getAddress(), " tried to join the list but the list is full.", false)
    }
}
await request(acc2)
await request(acc3)
await request(acc4)
await request(acc5)
await request(acc6)
await request(acc7)

while (!pleaseWait){
    stdlib.wait(1)
}
}

await ctx.p.Alice({
    ready : (ct) => {
        contractConnect = ct
        console.log("ALICE IS READY TO ACCEPT NEW MEMBERS: ")
        addMember()
    },
    end : async () => {
        console.log("ADMISSION PROCESS CLOSED")
        await ctx.a.AApi.endAdmission(true)
        console.log("Here are the members: ")
        console.log(members)
    },
    finish : () => {
        console.log("Contract Closing")
    }
})
