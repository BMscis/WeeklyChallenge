<script>
	import Alice from "./Alice.svelte"
	import Gambler from "./Gambler.svelte"
	let startRaffle
	let bidRaffle
</script>

<main>
	<h1>NFT RAFFLE!</h1>
	<button on:click={()=>{startRaffle=true}}>Start Raffle</button>
	<button on:click={()=>{bidRaffle=true}}>Join Raffle</button>
	{#if startRaffle}
	<Alice></Alice>
	{/if}
	{#if bidRaffle}
	<Gambler></Gambler>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>