<script>
	import Fa from 'svelte-fa';
	import { faGasPump, faScissors } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Image from '../shared/Image.svelte';
	import SocialCard from '../shared/SocialCard.svelte';

	let {projects = [
		{
			title: 'Fuel Price Locator',
			description:
				'Fuel Price Locator is an innovative application designed to help users find the most affordable petroleum products in their vicinity.'
		},
		{
			title: 'Tailors Online',
			description:
				'This platform connects users with talented tailors, providing a seamless experience in finding the right designer for your fabrics.'
		}
	]} = $props();
</script>

<section class="">
	<div class="container text-center">
		<h2 class="text-danger">Projects</h2>
		<div class="row">
			<div class="col bg-none rounded m-2">
				<h3 class="text-primary p-3"><Fa icon={faGasPump} />{projects[0].title}</h3>
				<p class="text-black">{projects[0].description}</p>

				<SocialCard TextBlue
					SocialIcons={[
						{
							icon: 'bi-github',
							href: 'https://github.com/alchemistlowkey/fuelpricelocator.git'
						}
					]}
				/>
				<br />
				<br />
				<div class="fw-bold">
					<Image
						Images={[
							{
								head: 'Frontend framework:',
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
			<div class="col rounded m-2">
				<h3 class="text-warning p-3"><Fa icon={faScissors} />{projects[1].title}</h3>
				<p class="text-black">{projects[1].description}</p>
				<SocialCard TextYellow
					SocialIcons={[
						{
							icon: 'bi-github',
							href: 'https://github.com/alchemistlowkey/tailors_online.git'
						}
					]}
				/>

				<br />
				<br />
				<div class="fw-bold">
					<Image
						Images={[
							{
								head: 'Frontend framework:',
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
		</div>

		<div class="row">
			<div class="col">
				<Image
					ProjectsImg={[
						{
							href: 'https://www.fuelpricelocator.live/',
							src: 'images/fuelpricebg.png',
							alt: 'Fuel Price Locator'
						}
					]}
				/>
			</div>

			<div class="col">
				<Image
					ProjectsImg={[
						{
							href: 'https://www.tailorsonline.tech/',
							src: 'images/TailorsOnline.png',
							alt: 'Tailors Online'
						},
						{
							href: 'https://www.tailorsonline.tech/',
							src: 'images/TailorsOnline2.png',
							alt: 'Tailors Online'
						},
						{
							href: 'https://www.tailorsonline.tech/',
							src: 'images/TailorsOnline3.png',
							alt: 'Tailors Online'
						}
					]}
				/>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		font-family: 'Poppins';
		padding: 2em;
	}
</style>
