<script lang="ts">
    import { page } from "$app/stores";
</script>



<div class="navbar">
    <a href="/" class:active={$page.url.pathname == '/'}>Home</a>
    <a href="/my-monsters" class:active={$page.url.pathname == '/my-monsters'}>My Monsters</a>
</div>

<div class="container">
    <slot/>
</div>



<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        padding: 10px;

        background-color: #f6f6f6;
    }
    .navbar a {
        text-decoration: none;
        color: black;
        padding: 6px;
    }
    .navbar a:hover {
        color: #0070f3;
    }
    .navbar a.active {
        border: 1px solid #879bb2;
        border-radius: 4px;
    }
    :global(body) {
        margin: 0;
    }
    .container {
        max-width: 90%;
        margin: 0 auto;
        width: 1200px;
        padding: 20px;
    }
</style>
