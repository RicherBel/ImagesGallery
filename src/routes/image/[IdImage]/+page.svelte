<script>
    export let data;
    var {Product} = data;
    console.log("hola ",Product);
</script>

    <h1>No hay nada</h1>
<div class="ac">
    <img  src="{Product[0].imgurl}" alt="">
    <div>
        <h1>{Product[0].titulo}</h1>
        <p>{Product[0].cuerpo}</p>
    </div>
</div>


<style>
    .ac {
        display: flex;
    }
</style>
