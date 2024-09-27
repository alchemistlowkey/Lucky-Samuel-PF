<script>
	import SocialCard from '../shared/SocialCard.svelte';
	import Certificates from '../shared/Certificates.svelte';
</script>

<section class="text-center bg-image pb-4 pt-4 d-flex align-items-center min-vh-100">
	<div class="container-fluid">
		<div class="row mx-0 text-dark">
			<div class="col">
				<h1 class="fs-3">Lucky Samuel | Fullstack Software Engineer (Backend Heavy)</h1>
				<p class="text-wrap mx-auto fw-bold" style="max-width: 600px;">
					Building Robust, SEO optimized & Scalable Web Applications
				</p>
			</div>
		</div>

		<div class="row mx-0 mt-4 text-black w-2">
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
		<div class="row mx-0 mt-5">
			<!-- <h4>Certificates:</h4> -->
			<Certificates
				Certificates={[
					{
						src: '/images/ALX-cert.png',
						alt: 'ALX Certificate'
					},
					{
						src: '/images/cert.png',
						alt: 'LinkedIn Certificate'
					},
					{
						src: '/images/cert1.png',
						alt: 'LinkedIn Certificate'
					},
					{
						src: '/images/cert2.png',
						alt: 'LinkedIn Certificate'
					},
					{
						src: '/images/cert3.png',
						alt: 'LinkedIn Certificate'
					},
					{
						src: '/images/English1.png',
						alt: 'English Certificate'
					},
					{
						src: '/images/English2.png',
						alt: 'English Certificate'
					}
				]}
			/>
		</div>
	</div>
</section>

<style>
	section {
        font-family: 'Poppins';
		padding: 2em;
	}
</style>
