<script>
    import ErrorHandle from "$lib/util/ErrorHandle.svelte"
//     let imagLink="https://upload.wikimedia.org/wikipedia/commons/3/3b/Wenceslas_Hollar_-_Ordinis_Carthusiani_Monachus_%28State_3%29.jpg";
//    let id = "1";
//    let imagealt = "imagen";
   export let paints = []

</script>

{#if paints.length == 0 } <ErrorHandle msg = "No images yet :(" /> {:else}
    <div class="ImagCont">
        {#each paints as paint}
            <section class="SubIteamCont">
                <a target="_blank" href={paint.imgurl}>
                    <img loading="lazy" src={paint.imgurl} alt="Image de {paint.titulo}">
                </a>
                <div class="info">
                    
                </div>
            </section>
        {/each} 
    </div>
{/if}

<!-- Test -->
<!-- <div class="ImagCont">
    {#each Array(50) as _}
        <section class="SubIteamCont">
            <a href="/Image/{id}">
                <img loading="lazy" src={imagLink} alt={imagealt}>
            </a>
            <div class="info">
                
            </div>
        </section>
    {/each}
</div> -->