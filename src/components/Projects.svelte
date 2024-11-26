<script>
	import Fa from 'svelte-fa';
	import { faGasPump, faScissors, faHouse } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Image from '../shared/Image.svelte';
	import SocialCard from '../shared/SocialCard.svelte';

	let {
		projects = [
			{
				title: 'Fuel Price Locator',
				description:
					'Fuel Price Locator is an innovative application designed to help users find the most affordable petroleum products in their vicinity.'
			},
			{
				title: 'Tailors Online',
				description:
					'This platform connects users with talented tailors, providing a seamless experience in finding the right designer for your fabrics.'
			},
			{
				title: 'Square Metres',
				description:
					'This is a real estate platform that helps users with providing a seamless experience in finding the right property for their needs.'
			}
		]
	} = $props();
</script>

<section class="">
	<h1 class="text-danger-700 text-center text-4xl p-10">Projects</h1>
	<div class="grid lg:grid-cols-3">
		<div class="card text-center shadow-2xl">
			<div class="card-body">
				<h2 class="card-title mx-auto text-primary-700">
					<Fa icon={faGasPump} />{projects[0].title}
				</h2>
				<p class="text-black">{projects[0].description}</p>
				<div class="grid grid-cols-3">
					<div class="col-span-12 p-3">
						<SocialCard
							TextBlue
							SocialIcons={[
								{
									icon: 'bi-github',
									href: 'https://github.com/alchemistlowkey/fuelpricelocator.git'
								}
							]}
						/>
					</div>
					<Image
						Images={[
							{
								head: 'Frontend:',
								src: 'https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg',
								alt: 'svelte'
							},
							{
								head: 'Backend:',
								src: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
								alt: 'expressJS'
							},
							{
								head: 'Database:',
								src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
								alt: 'mongodb'
							}
						]}
					/>
				</div>
			</div>
			<figure>
				<img alt="Fuel Price Locator" src="images/fuelpricebg.png" />
			</figure>
		</div>
		<div class="card text-center shadow-2xl">
			<div class="card-body">
				<h2 class="card-title mx-auto text-warning-700">
					<Fa icon={faScissors} />{projects[1].title}
				</h2>
				<p class="text-black">{projects[1].description}</p>
				<div class="grid grid-cols-3">
					<div class="col-span-12 p-3">
						<SocialCard
							TextYellow
							SocialIcons={[
								{
									icon: 'bi-github',
									href: 'https://github.com/alchemistlowkey/tailors_online.git'
								}
							]}
						/>
					</div>
					<Image
						Images={[
							{
								head: 'Frontend:',
								src: 'https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg',
								alt: 'svelte'
							},
							{
								head: 'Backend:',
								src: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
								alt: 'expressJS'
							},
							{
								head: 'Database:',
								src: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
								alt: 'postgresql'
							}
						]}
					/>
				</div>
			</div>
			<figure>
				<img alt="Fuel Price Locator" src="images/TailorsOnline.png" />
			</figure>
			<figure>
				<img alt="Fuel Price Locator" src="images/TailorsOnline2.png" />
			</figure>
		</div>
		<div class="card text-center shadow-2xl">
			<div class="card-body">
				<h2 class="card-title mx-auto text-success-700">
					<Fa icon={faHouse} />{projects[2].title}
				</h2>
				<p class="text-black">{projects[2].description}</p>
				<div class="grid grid-cols-3">
					<Image
						Images={[
							{
								head: 'Frontend:',
								src: 'https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg',
								alt: 'svelte'
							},
							{
								head: 'Backend:',
								src: 'https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg',
								alt: 'svelte'
							},
							{
								head: 'Database:',
								src: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
								alt: 'supabase'
							}
						]}
					/>
				</div>
			</div>
			<figure>
				<img alt="Square Metres" src="images/sqm.png" />
			</figure>
			<figure>
				<img alt="Square Metres" src="images/sqmfitila.png" />
			</figure>
		</div>
	</div>
</section>

<style>
	.card {
		margin: 0.5rem;
		transition: transform 0.2s; /* Add a smooth transition effect */
	}

	.card:hover {
		transform: scale(1.02); /* Scale up on hover */
	}
</style>
