<script lang="ts">
    import { caughtMonsters } from "$lib/stores";
    import Monster from "../Monster.svelte";

</script>

<h2> My monster </h2>

{#each $caughtMonsters as monster}
    <Monster {monster} />
{/each}