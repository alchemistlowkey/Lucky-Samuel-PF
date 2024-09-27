<script>
	export let headerBG = '';
	export let Bg = '';
</script>

{#if Bg}
  <section
    class="bg fw-bold pt-5"
    style="background-image: url('/images/{Bg}')"
  >
    <slot></slot>
  </section>
{/if}

{#if headerBG}
	<div
		class="bg col text-black m-2 fw-bold rounded p-5"
		style="background-image: url('/images/{headerBG}')"
	>
		<slot></slot>
	</div>
{/if}


<style>
  section{
    padding: 0;
    margin: 0;
    font-family: "Poppins";
  }
	.bg {
		background-size: cover;
		background-position: center;
	}
</style>
