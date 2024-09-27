<script>
    export let Certificates = [];
</script>

{#each Certificates as cert}
<div class="col-4 col-md-3 col-lg-2 mt-2">
    <a href="/about" class=""
        ><img src={cert.src} class="img-fluid d-inline-block rounded" alt={cert.alt} /></a
    >
</div>
{/each}

<style>
    /* .disabled-link {
		pointer-events: none;
		cursor: default;
		color: gray;
		text-decoration: none;
	} */
</style>