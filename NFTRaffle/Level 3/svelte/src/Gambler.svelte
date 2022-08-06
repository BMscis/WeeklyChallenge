<script>
    import { A, B_playRaffle } from "../Rsh/build/index.main.mjs"
import {Gambler} from "./backend"
    let chance = false
    let moveON =false
    let start = false
    let tokenID = 0
    let tickets = 0
    let contractINFO = ""
    let winningTicket = false
    let G
    const play = async () => {
        G = new Gambler(tokenID,contractINFO,tickets)
        start = true
    }
</script>
{#if !start}
<div>
    Are you ready to join the raffle ?
    {#if !moveON}
    <button
    on:click={()=>{moveON = true}}
    >
        YES
    </button>
    <button
    on:click={()=>{moveON = true}}
    >
        NO
    </button>
    {/if}
    {#if moveON}
    <form on:submit|preventDefault={play}>
        <label for="token-id">Enter TOKEN ID</label>
        <input id ="token-id" type="number" bind:value={tokenID}/>
        <label for="contract-info">Enter Contract INFO</label>
        <input id="contract-info" type="text" bind:value={contractINFO}/>
        <label for="ticket-info">Enter ticket INFO</label>
        <input id="ticket-info" type="number" bind:value={tickets}/>
        <button type="submit">SUBMIT</button>
    </form>
    {/if}
</div>
{/if}
{#if start}
<div>
    {#await G.getGambler()}
        <div>Loading</div>
    {:then result} 
    <button
    on:click={()=> chance= true}
    >
        PLAY
    </button>
    {#if chance}
        {#await G.playRaffle()}
            <div>Loading...</div>
        {:then result} 
            <div>You played : {result}</div>
            <button on:click={()=>{winningTicket=true}}>
                Get Winning Ticket
            </button>
        {/await}
    {/if}
    {#if winningTicket}
        {#await G.tryYourLuck()}
            <div>Loading...</div>
        {:then result} 
            <div>Ruffle result : {result}</div>
        {/await}
    {/if}
    {/await}
</div>
{/if}