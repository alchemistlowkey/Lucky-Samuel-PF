<script>
	let {
		ListItems = [],
		ListSkills = [],
		ListNavItems = [],
		BackgroundColors = [
			'BgBlue',
			'BgYellow',
			'BgOrange',
			'BgIndigo',
			'BgPink',
			'BgGreen',
			'BgPurple'
		]
	} = $props();

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
		<li class="list-group-item text-white font-extrabold {getUniqueBackgroundColor()}">
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

{#if ListNavItems}
	{#each ListNavItems as navItem}
		<li class="nav-item pt-1">
			<a
				class="nav-link rounded {getUniqueBackgroundColor()} text-white glass font-extrabold text-end pe-2 mx-3"
				href={navItem.href}
			>
				<i class={navItem.icon}></i>
				{navItem.text}
			</a>
		</li>
	{/each}
{/if}

<style>
	/* Background colors */
</style>
