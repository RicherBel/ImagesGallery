<script>
    import Imagecont from "$lib/Imagecont.svelte"
    import Metatags from "$lib/util/Metatags.svelte"
    export let data;
    var {Product} = data;
</script>

<Metatags/>

<Imagecont paints = {Product}/>

