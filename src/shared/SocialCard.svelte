<script>
	import Bg from './Bg.svelte';
	export let SocialCard = [];
	export let SocialIcons = [];
	export let TextBlue = false;
	export let TextYellow = false;
</script>

{#if SocialCard}
	{#each SocialCard as card}
		<Bg headerBG={card.bg}>
			<p>{card.head}</p>
			<ul class="pagination justify-content-center">
				<li class="page-item">
					<a class="page-link bg-primary link-warning text-white" href={card.href} target="_blank"
						><i class={card.icon}></i></a
					>
				</li>
			</ul>
		</Bg>
	{/each}
{/if}

{#if SocialIcons}
	{#each SocialIcons as socialicon}
		<a
			class="fs-2"
			class:text-blue={TextBlue}
			class:text-yellow={TextYellow}
			href={socialicon.href}
			target="_blank"
		>
			<i class={socialicon.icon}></i></a
		>
	{/each}
{/if}

<style>
	.text-blue {
		color: blue;
	}
	.text-yellow {
		color: orange;
	}
	.text-blue:hover {
		color: greenyellow;
	}
	.text-yellow:hover {
		color: blueviolet;
	}
</style>
