<script>
    export let Certificates = [];
</script>

{#each Certificates as cert}
<div class="col mt-2">
    <a href="/" class="disabled-link"
        ><img src={cert.src} class="img-fluid d-inline-block rounded" alt={cert.alt} /></a
    >
</div>
{/each}

<style>
    .disabled-link {
		pointer-events: none;
		cursor: default;
		color: gray;
		text-decoration: none;
	}
</style>