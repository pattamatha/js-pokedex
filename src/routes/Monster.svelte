<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import type { IndexMonster } from "./+page";

    export let monster: IndexMonster;
    export let updateSearchParams: (key: string, value: string) => void;
    export let isInteractive = false;
</script>




<div class="monster">
    <div on:click={() => isInteractive? updateSearchParams('monsterId', monster.id) : () => {}}>
        <div class="monster-content">
            <img class="monster-image" src={monster.image} alt="monster.name"/>
            {monster.name}
        </div>
        <div class="monster-id">
            {monster.id}
        </div>
    </div>
    {#if isInteractive}
        <div on:click={() => updateSearchParams('monsterId2', monster.id)}>
            add monster 2
        </div>
    {/if}
    
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