<script>
    import {Alice} from "./backend"
    let createRuffle = false
    let deploy = false
    let start = false
    let tickets = 0
    let A
    const startRuffle = async () => {
        A = new Alice(tickets)
        deploy = true
    }
</script>
<div class="Alice">
    Hello Alice, create a raffle ?
    {#if !deploy}
    <div>
        {#if !createRuffle}
        <button
        on:click={()=>{createRuffle = true}}
        >
            YES
        </button>
        <button
        on:click={()=>{createRuffle = false}}
        >
            NO
        </button>
        {/if}
        {#if createRuffle}
        <div>
            Choose the number of tickets
        </div>
        <form on:submit|preventDefault={startRuffle}>
            <input type="number" bind:value={tickets}>
            <button type="submit">Play</button>
        </form>
        {/if}
    </div>
    {/if}
    {#if deploy}
    {#await A.getAlice() }
        <div>Creating token....</div>
    {:then result} 
    <div> Copy this
        <label for="token-id">TOKEN ID</label>
        <input id="token-id" type="number" value={result[0]}>
        <label for="tickets">TICKETS</label>
        <input id="tickets" type="number" value={result[1]}>
    </div>
    <div>
        <button 
        on:click={()=>{start = true}}
        >DEPLOY</button>
        {#if start}
        {#await A.deploy()}
            <div>Deploying contract.....</div>
        {:then result} 
            <label for="contract">CONTRACT ADDRESS</label>
            <input id="contract" value={result} type="text"/>
        {/await}
        {/if}
    </div>
    {/await}
    {/if}
</div>