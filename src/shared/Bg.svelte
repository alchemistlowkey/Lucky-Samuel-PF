<script>
	let { children, headerBG = '', Bg = '', NavBg = '' } = $props();
</script>

{#if Bg}
	<section class="bg fw-bold pt-5" style="background-image: url('/images/{Bg}')">
		{@render children()}
	</section>
{/if}

{#if NavBg}
	<section class="bg fw-bold" style="background-image: url('/images/{NavBg}')">
		{@render children()}
	</section>
{/if}

{#if headerBG}
	<div
		class="bg col text-black m-2 fw-bold rounded p-5"
		style="background-image: url('/images/{headerBG}')"
	>
		{@render children()}
	</div>
{/if}

<style>
	section {
		padding: 0;
		margin: 0;
	}
	.bg {
		background-size: cover;
		background-position: center;
	}
</style>
