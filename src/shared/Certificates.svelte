<script>
	let { Certificates = [] } = $props();
</script>


	{#each Certificates as cert}
		<div class="card card-compact bg-success-50 shadow-2xl">
			<figure>
				<img src={cert.src} alt={cert.alt} />
			</figure>
			<div class="card-body">
				<h5 class="card-title text-base">{cert.alt}</h5>
			</div>
		</div>
	{/each}

<style>
	.card {
		margin: 0.5rem;
		transition: transform 0.2s; /* Add a smooth transition effect */
	}

	.card:hover {
		transform: scale(1.02); /* Scale up on hover */
	}
</style>
