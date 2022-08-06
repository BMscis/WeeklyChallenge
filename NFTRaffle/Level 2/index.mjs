import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
const TICKETS = 10
const accounts = []

const getRandom = (x) => Math.floor(Math.random() * x)
const common = {...stdlib.hasRandom,chooseNumber : (x) => {
  const rnd = getRandom(TICKETS)
  if(x[0] == 'B') console.log("Here's your number Bob, ", rnd)
  console.log("Choosing random number...")
  return rnd
},
showResult : async (bobWon,winningNum,who) =>{
  const wn = stdlib.bigNumberToNumber(winningNum)
  if(who == "A"){
    bobWon ? console.log("Bob Won : The winning number was - ",wn) : 
    console.log("Bob lost : The winning number was - ",wn)
    await checkBalance([["Alice",accAlice]])
  }else{
    bobWon ? console.log("Congratulations, you have won the raffle : The winning number was - ",wn) : 
    console.log("Sorry Bob please try again later : The winning number was - ",wn)
    await checkBalance([["Bob",  accBob]])
  }}}

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
console.log("Creating New Token")
const TOKEN = await stdlib.launchToken(accAlice,"JTOKEN","JTK",{supply:1})
const TOKENID = TOKEN.id

const checkBalance = async (val) => {
    const [who,ba] = val
    console.log("ACCOUNT: ")
      const [ bal, tkBal ] = await stdlib.balancesOf(ba, [null, TOKENID]);
      console.log(who,"'s ALGO balance is : ", stdlib.formatCurrency(bal,4))
      console.log(who,"'s JID balance is : ", stdlib.bigNumberToNumber(tkBal))
}

await checkBalance(["Alice",accAlice])

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);

const startRuffle = async () => {
  const playRuffle = async (who) => {
    const per = "Bob" + who
    const acc = await stdlib.newTestAccount(startingBalance)
    acc.setDebugLabel(who)
    await acc.tokenAccept(TOKENID)
    await checkBalance([per,acc])
    accounts.push([who,acc])
    const ctx = acc.contract(backend, ctcAlice.getInfo());
    const rnd = getRandom(TICKETS)
    const res = await ctx.a.B.playRaffle(rnd)
    console.log(per," has played ",rnd)}
  let tt = 0
  while (tt < TICKETS){
    await playRuffle(tt)
    await stdlib.wait(1)
    tt += 1
  }
}
const showResult = async () => {
  const revealTicket = async (ax) => {
    const acc = ax[1]
    const who = ax[0]
    const per = "Bob" + who
    const ctx = acc.contract(backend, ctcAlice.getInfo());
    const [res,rs] = await ctx.a.B.tryYourLuck(0)
    console.log(per,
      " checks ticket :,",stdlib.bigNumberToNumber(rs),"did they win ? |> ", 
      res)
    await checkBalance([per,acc])
    return res
  }
  let tt = 0
  let vl = false
  while (tt < TICKETS && !vl){
    vl = await revealTicket(accounts[tt])
    vl ? {} : await stdlib.wait(1)
    tt += 1}
  return vl
  }

console.log('Starting backends...');
await backend.A(ctcAlice, {
      ...stdlib.hasRandom,
      ...common,
      getToken : () => {
        console.log("Getting tokens from Alice: ")
        console.log("TOKENID: ",stdlib.bigNumberToNumber(TOKENID),
        " TICKET_NUMS = ",TICKETS)
        return [TOKENID,TICKETS]
      },
      showCommitment : async (cm) => {
        console.log("Here's the Winning number hash")
        console.log("")
        console.log(cm)
        console.log("___________________________")
        startRuffle()
      },
      showTicket : async (tk) => {
        console.log("Here's the Winning number")
        console.log("")
        console.log(stdlib.bigNumberToNumber(tk))
        console.log("___________________________")
        const res = await showResult()
        res ? console.log("DONE") :
        await checkBalance(["Alice",accAlice])
        console.log("FINISHED")
      }
});

console.log('Goodbye, Alice and Bob!');
