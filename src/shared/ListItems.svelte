<script>
	export let ListItems = [];
	export let ListSkills = [];
	export let BackgroundColors = [
		'BgBlue',
		'BgYellow',
		'BgOrange',
		'BgIndigo',
		'BgRed',
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

{#if ListItems}
	{#each ListItems as item}
		<li class="list-group-item">
			<p class="float-start fw-semibold">{item.head}</p>
			<p class="float-end fw-medium">{item.body}</p>
		</li>
	{/each}
{/if}

{#if ListSkills}
	{#each ListSkills as skill}
		<li class="list-group-item {getUniqueBackgroundColor()}">
			{skill.head}:
			<ul class="list-group">
				<li class="list-group-item">
					{skill.top}
				</li>
				<li class="list-group-item">
					{skill.bottom}
				</li>
			</ul>
		</li>
	{/each}
{/if}

<style>
	/* Background colors */
	.BgBlue {
		background-color: skyblue;
	}
	.BgOrange {
		background-color: orange;
	}
	.BgGreen {
		background-color: green;
	}
	.BgYellow {
		background-color: yellow;
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
	.BgRed {
		background-color: lightcoral;
	}
	/* Hover effects */
	.BgBlue:hover {
		background-color: greenyellow;
	}
	.BgOrange:hover {
		background-color: blueviolet;
	}
	.BgGreen:hover {
		background-color: yellow;
	}
	.BgYellow:hover {
		background-color: green;
	}
	.BgIndigo:hover {
		background-color: purple;
	}
	.BgPurple:hover {
		background-color: pink;
	}
	.BgPink:hover {
		background-color: red;
	}
	.BgRed:hover {
		background-color: blue;
	}
</style>
