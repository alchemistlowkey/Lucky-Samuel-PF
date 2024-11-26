<script>
	import SocialCard from '../shared/SocialCard.svelte';
	import Certificates from '../shared/Certificates.svelte';
</script>

<section class="text-center bg-image pb-4 d-flex align-items-center min-vh-100">
	<div class="container-fluid">
		<div class="row mx-0 text-dark">
			<div class="col">
				<h1 class="fs-3">Lucky Samuel | Fullstack Software Engineer (Backend Heavy)</h1>
				<p class="text-wrap mx-auto fw-bold max-w-xl">
					Building Robust, SEO optimized & Scalable Web Applications
				</p>
			</div>
		</div>

		<div class="row mx-0 mt-4 text-black">
			<h1>Get In Touch</h1>
			<p>
				I’m always open to new opportunities and collaborations. Whether you have a project idea or
				just want to connect, feel free to reach out!
			</p>

			<SocialCard
				SocialCard={[
					{
						bg: 'linkedin5.jpg',
						head: 'LinkedIn profile',
						href: 'https://www.linkedin.com/in/lucky-samuel/',
						icon: 'bi-linkedin'
					},
					{
						bg: 'x.jpg',
						head: 'Twitter profile',
						href: 'https://x.com/alchemistlowkey',
						icon: 'bi-twitter'
					},
					{
						bg: 'github2.jpg',
						head: 'Github profile',
						href: 'https://github.com/alchemistlowkey',
						icon: 'bi-github'
					}
				]}
			/>
		</div>
		<div class="mx-0 mt-5">
			<!-- <h4>Certificates:</h4> -->
			<div class="grid grid-cols-2">
				<Certificates
					Certificates={[
						{
							src: '/images/cert.png',
							alt: 'Career Essentials in Software Development'
						},

						{
							src: '/images/English2.png',
							alt: 'English for IT Professionals 2'
						},
						{
							src: '/images/ALX-cert.png',
							alt: 'ALX Certificate in Software Engineering'
						},
						{
							src: '/images/gig.png',
							alt: 'ALX Ventures Gig-at-a-start-up Certificate'
						}
					]}
				/>
			</div>
		</div>
	</div>
</section>

<style>
</style>
