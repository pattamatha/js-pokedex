<script lang="ts">
    import { count, doubleCount } from '$lib/stores';
</script>

<p>
    Count is: {$count}, ouble is: {$doubleCount}
</p>
<button on:click={() => $count++}>++</button>
<button on:click={() => $count+=1}>+=</button>
<button on:click={() => $count=$count+1}>+</button>