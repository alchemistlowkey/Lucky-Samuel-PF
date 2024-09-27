<script>
	export let Images = [];
	export let ProjectsImg = [];
	export let Img = [];
</script>

{#if Images}
	{#each Images as img}
		<p>
			{img.head} <img src={img.src} alt={img.alt} width="40" height="40" loading="lazy" />
		</p>
	{/each}
{/if}

{#if ProjectsImg}
	{#each ProjectsImg as img}
		<a href={img.href} class="" target="_blank"
			><img src={img.src} class="img-fluid d-inline-block rounded" alt={img.alt} loading="lazy" /></a
		>
	{/each}
{/if}

{#if Img}
	{#each Img as img}
		<img src={img.src} alt={img.alt} width="40" height="40" loading="lazy" />
	{/each}
{/if}