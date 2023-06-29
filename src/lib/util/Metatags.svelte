<script>
    export let title = "Imposter Bread's Gallery";
    export let descrip = "A simple gallery ";
    export let colour = "#F4D7D7";

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={descrip}>
    <meta name="theme-color" content= {colour}>
    <meta property="og:title" content={title} >
    <meta property="og:description" content={descrip} >
</svelte:head>