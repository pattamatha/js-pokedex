<!-- ?----------------Script-------------------- -->
<script lang="ts">
	import { generations } from "./generations"
	import type { PageData } from "./$types";
	import { page } from "$app/stores";
    import type { IndexMonster } from "./+page";
    import { goto } from "$app/navigation";
    import Monster from "./Monster.svelte";
	export let data: PageData;
	
	let seachString = "";
	let form = {
		searchString: ""
	};

	$: selectedMonsters = data.monsters.filter((monster) => {
		return  monster.name.toLowerCase().includes(seachString.toLowerCase());
	});

	$: selectedGenerationId = $page.url.searchParams.get("generation_id") || '';

	const updateSearchParams = (key: string, value: string) => {
		const searchParams = new URLSearchParams($page.url.searchParams);
		// ?key1=value1&key2=value2
		searchParams.set(key, value);
		goto (`/?${searchParams.toString()}`);
	};

	const submitSearch = (e: Event) => {
		seachString = form.searchString;
	};

</script>



<!-- ?-----------------HTML------------------- -->

<!-- catagories -->
<div class="generations">
	<button class="generation"
	class:active={selectedGenerationId === 'all'}
	on:click={() => updateSearchParams('generation_id', 'all')}>
	All
	</button>
	{#each generations as generation (generation.id)}
		<button class="generation"
		class:active={selectedGenerationId === generation.id.toString()} 
			on:click={() => updateSearchParams('generation_id', generation.id.toString())}> 
			{generation.main_region} 
		</button>
	{/each}
</div>

<!-- input -->
 <form class="search-form" on:submit|preventDefault={submitSearch}> 
	<input class="search-field" type="text" bind:value={form.searchString} placeholder="search ..">
	<input type="submit" value="search">
 </form>


<!-- pokemon card -->
 <div class="monsters">
	{#each selectedMonsters as monster, i (monster.id)}
		<Monster
			monster = {monster}
		/>
	{/each}
 </div>








<!-- ?----------------Style-------------------- -->
<style>
	.generations {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;

	}
	.generation {
		margin: 5px;
		padding: 6px 10px;
		border: 1px solid black;
		background-color: #f9f9f9;
		color: #333;
		cursor: pointer;
	}
	.generation.active {
		background-color: #333;
		color: #f9f9f9;
	}
	.generation.active:hover {
		background-color: #444;
	}
	.generation:hover {
		background-color: #f0f0f0;
	}
	.monsters {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.search-form {
		display : flex;
		justify-content: center;
		margin: 16px 0;
	}
	.search-form input[type="text"] {
		width: 200px;
		padding: 5px 10px;
		border: 1px solid #ccc;
		border-radius: 6px;
	}
	.search-form input[type="submit"] {
		padding: 2px 12px;
		background-color: black;
		border: 1px solid #ccc;
		border-radius: 6px;
		color: white;
		margin-left: 10px;
	}
	
</style>




