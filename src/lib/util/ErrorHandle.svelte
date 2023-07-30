<script>
    export let status,msg;
    if (status == 500) {msg = "Database failure (\\X_X/)"};
</script>

<div class="ErrorContainer">
    {#if status} <h1>Error code: {status}</h1> {/if}
    <h2>{msg}</h2>
</div>
