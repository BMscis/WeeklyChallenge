import { ask } from '@reach-sh/stdlib';
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

console.log('CONTRACT START')
const stdlib = loadStdlib();

let done = false
const startingBalance = stdlib.parseCurrency(6000);
const startingBalance2 = stdlib.parseCurrency(100);
let timer = 0
const common = {
  showTimer : (tmr) => {
    const t = stdlib.bigNumberToNumber(tmr)
    //timer = t
    console.log("Time left is, ", t)
  },
  
}
const checkState = (x) => {return x == 0 ? false : true}
const isHere = (x) => x ? console.log("Im here") : console.log("Im not here")

const getBalance = async (x,y) => {
  const bal = stdlib.formatCurrency(await stdlib.balanceOf(x))
  console.log(y, "'s balance is: ", bal)
};

const accAlice = await stdlib.newTestAccount(startingBalance);
console.log('Hello, Alice!');
const accRobey = await stdlib.newTestAccount(startingBalance2);
console.log('Hello, Robey!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcRobey = accRobey.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');
await getBalance(accAlice,"Alice")
await getBalance(accRobey,"Robey")
await Promise.all([
    stdlib.withDisconnect(()=> 
    backend.Alice(ctcAlice, {
      ...common,
      ...stdlib.hasRandom,
      inheritance : () => {
        console.log("Alice starts a fund worth: ", 5000)
        return [stdlib.parseCurrency(5000)]},
      deadOrAlive : async () => {
        if(done) stdlib.disconnect(null)
        const dOA = await ask.ask("Alice are you there ?",ask.yesno)
          console.log("ASK: ", dOA)
        isHere(dOA)
        return dOA},
      AGotTheFunds : (who) => {
        console.log(who," got the funds")
        stdlib.disconnect(null)
        done = true
      }})),

    stdlib.withDisconnect(() => 
    backend.Robey(ctcRobey, {
      ...common,
      ...stdlib.hasRandom,
      acceptInheritance : async () => {
      const trms = await ask.ask("Robey do you accept the terms ?",ask.yesno)
      console.log("TERMS: ",trms)
      if (trms){
        console.log("Robey accepts funds")
        return true
      }else{console.log("Robey rebuts funds")
        exit()}},
        BGotTheFunds : (who) => {
        console.log(who," got the funds")
        stdlib.disconnect(null)
        done = true
      }}),)

  ])
  await getBalance(accAlice,"Alice"),
  await getBalance(accRobey,"Robey"),
  console.log('Goodbye, Alice and Robey!')
