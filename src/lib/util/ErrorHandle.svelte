<script>
    export let status,msg;
</script>

<div class="ErrorContainer">
    {#if status} <h1>status: {status}</h1> {/if}
    <h2>{msg}</h2>
</div>
