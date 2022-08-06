import * as backend from '../Rsh/build/index.main.mjs'
import {loadStdlib} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const stdlib =  loadStdlib("ALGO")
stdlib.setWalletFallback(stdlib.walletFallback({
    providerEnv: "TestNet", MyAlgoConnect }));

const getRandom = (x) => Math.floor(Math.random() * x)

const checkBalance = async (val) => {
    const [who,ba,TOKENID] = val
    console.log("ACCOUNT: ")
      const [ bal, tkBal ] = await stdlib.balancesOf(ba, [null, TOKENID]);
      console.log(who,"'s ALGO balance is : ", stdlib.formatCurrency(bal,4))
      console.log(who,"'s JID balance is : ", stdlib.bigNumberToNumber(tkBal))
}
const tickets = []
class Participant {
    constructor(){}
    checkEvent({when,what}){
        const fun = what[0]
        const state = what[1]
        switch (fun) {
            case 'TP':
                console.log("Ticket has been pulled: ", stdlib.bigNumberToNumber(state))
                tickets.push(stdlib.bigNumberToNumber(state))
                break;
            case 'SW':
                console.log("The winner is: ", state)
                break;
            case 'ST':
                console.log('The number is: ', stdlib.bigNumberToNumber(state))
                break;
        
            default:
                break;
        }

    }
}
export class Alice extends Participant{
    constructor(tickets){
        super()
        this.tickets = tickets
    }
    random() { return stdlib.hasRandom.random(); }
    async getAlice () {
        this.acc = await stdlib.getDefaultAccount()
        this.token = await stdlib.launchToken(this.acc,"JTOKEN","JTK",{supply:1,decimals:0})
        this.tokenID = this.token.id
        this.contract = await this.acc.contract(backend)
        await checkBalance(["Alice", this.acc,this.tokenID])
        console.log("GETALICE: ",[this.tokenID,this.tickets])
        this.EM = this.contract.events
        this.EM.E.ticketPulled.monitor(this.checkEvent)
        this.EM.E.showTicket.monitor(this.checkEvent)
        this.EM.E.showWinner.monitor(this.checkEvent)
        return [stdlib.bigNumberToNumber(this.tokenID),this.tickets]
    }
    async deploy () {
        this.contract.p.A(this)
        this.contractINFO = JSON.stringify(await this.contract.getInfo())
        return this.contractINFO
    }
    async chooseNumber () {
        console.log("Choosing random Number for Alice")
        const rnd = getRandom(this.tickets)
        return rnd
    }
    async showResult(bobWon,winningNum,who) {
        const wn = stdlib.bigNumberToNumber(winningNum)
        if(who == "A"){
            bobWon ? console.log("Bob Won : The winning number was - ",wn) : 
            console.log("Bob lost : The winning number was - ",wn)
            await checkBalance([["Alice",this.acc]])
        }else{
            bobWon ? console.log("Congratulations, you have won the raffle : The winning number was - ",wn) : 
            console.log("Sorry Bob please try again later : The winning number was - ",wn)
            await checkBalance([["Bob",  accBob]])
        }}
    async getToken( ){
        const TKN = this.tokenID
        console.log("Getting tokens from Alice: ")
        console.log("TOKENID: ",
        " TICKET_NUMS = ",this.tickets)
        return [stdlib.bigNumberify(TKN),this.tickets]
    }
    async showCommitment(cm){
        this.commitment = cm
        console.log("Here's the Winning number hash")
        console.log("")
        console.log(cm)
        console.log("___________________________")
    }
    async showTicket(tk){
        this.winningNum = stdlib.bigNumberToNumber(tk)
        console.log("Here's the Winning number")
        console.log("")
        console.log(stdlib.bigNumberToNumber(tk))
        console.log("___________________________")
      }
}

export class Gambler extends Participant{
    constructor(tid,contractINFO,tickets){
        super()
        this.contractINFO = contractINFO
        this.tid = tid
        this.tickets = tickets
    }
    async getGambler(){
        this.acc = await stdlib.getDefaultAccount()
        await this.acc.tokenAccept(stdlib.bigNumberify(this.tid))
        await checkBalance(["Gambler",this.acc,this.tid])
        this.contract = await this.acc.contract(backend, JSON.parse(this.contractINFO))
        this.EM = this.contract.events
        this.EM.E.ticketPulled.monitor(this.checkEvent)
        this.EM.E.showTicket.monitor(this.checkEvent)
        this.EM.E.showWinner.monitor(this.checkEvent)
    }
    async playRaffle(){
        let rnd = getRandom(this.tickets)
        while(tickets.includes(rnd)){
            rnd = getRandom(this.tickets)
            console.log("Ticket: ",rnd, " has been taken")
        }
        const res = await this.contract.apis.B.playRaffle(rnd)
        console.log(this.who," has played ",rnd)
        return rnd
    }
    async tryYourLuck(){
        const rnd = getRandom(this.tickets)
        const res = await this.contract.apis.B.tryYourLuck(rnd)
        console.log(this.who," has played ",rnd)
        return res
    }
}