<script>
	import Bg from './Bg.svelte';
	export let SocialCard = [];
	export let SocialIcons = [];
	export let TextBlue = false;
	export let TextYellow = false;
	export let BackgroundColors = [
		'BgBlue',
		'BgYellow',
		'BgOrange',
		'BgIndigo',
		'BgPink',
		'BgGreen',
		'BgPurple'
	];
	// Create a shallow copy of BackgroundColors to ensure the original array is not modified
	let availableColors = [...BackgroundColors];

	// Function to get a non-repeating background color class
	function getUniqueBackgroundColor() {
		if (availableColors.length === 0) {
			availableColors = [...BackgroundColors]; // Reset if all colors are used
		}
		const randomIndex = Math.floor(Math.random() * availableColors.length);
		return availableColors.splice(randomIndex, 1)[0]; // Remove and return a color
	}
</script>

{#if SocialCard}
	{#each SocialCard as card}
		<Bg headerBG={card.bg}>
			<div class="container">
				<div class="row mx-0">
					<div class="col-12 col-md-4">
						<p class="text-light fw-bold">{card.head}</p>
						<ul class="pagination justify-content-center">
							<li class="page-item">
								<a
									class="page-link {getUniqueBackgroundColor()} text-white"
									href={card.href}
									target="_blank"><i class={card.icon}></i></a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
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
	.BgBlue {
		background-color: skyblue;
	}
	.BgOrange {
		background-color: gold;
	}
	.BgGreen {
		background-color: lightgreen;
	}
	.BgYellow {
		background-color: greenyellow;
	}
	.BgIndigo {
		background-color: fuchsia;
	}
	.BgPurple {
		background-color: gray;
	}
	.BgPink {
		background-color: pink;
	}
	/* Hover effects */
	.BgBlue:hover {
		background-color: lightcoral;
	}
	.BgOrange:hover {
		background-color: lightcyan;
	}
	.BgGreen:hover {
		background-color: lightgoldenrodyellow;
	}
	.BgYellow:hover {
		background-color: lightslategray;
	}
	.BgIndigo:hover {
		background-color: lightseagreen;
	}
	.BgPurple:hover {
		background-color: lightsteelblue;
	}
	.BgPink:hover {
		background-color: navajowhite;
	}
</style>
