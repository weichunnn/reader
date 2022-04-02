<script lang="ts">

	import { Button } from 'attractions';

	export let name: string;

	function changeName() {
		name = "Ben"
	}
</script>

<main>
	<div class="py-2 justify-center items-center">
		<h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		<Button style=";" on:click={changeName}>Change Name</Button>
	</div>
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