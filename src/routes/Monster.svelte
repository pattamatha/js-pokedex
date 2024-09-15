<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import type { IndexMonster } from "./+page";
	import { caughtMonsters } from "$lib/stores";

    export let monster: IndexMonster;
    //export let updateSearchParams: (key: string, value: string) => void;

	const catchMonster = () => {
		console.log("catching monster", monster);
		caughtMonsters.update((monsters) => {
			return [...monsters, monster];
		});
	};
</script>




<div class="monster">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={catchMonster}>
        <div class="monster-content">
            <img class="monster-image" src={monster.image} alt="monster.name"/>
            {monster.name}
        </div>
        <div class="monster-id">
            {monster.id}
        </div>
    </div>
    
</div>





<style>
    .monster {
		width: 100px;
		border-radius: 6px;
		margin: 12px;
		padding: 10px;
		position: relative;
		background-color: #f6f6f6;
	}
	.monster:hover {
		background-color: #ededed;
	}
	.monster-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.monster-id {
		position: absolute;
		top: 8px;
		left: 8px;
		font-size: 0.8em;
		color: rgb(157, 178, 191);
	}
	.monster-image {
		width: 70%;
		height: 70%;
	}
</style>