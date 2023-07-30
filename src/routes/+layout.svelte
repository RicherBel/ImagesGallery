<script>
   	import '../style.css';
	import Header from "$lib/Header.svelte"
	import Footer from "$lib/Footer.svelte"

</script>

<Header/>

<div class="MainContainer">
	<slot/>
</div>

<Footer/>