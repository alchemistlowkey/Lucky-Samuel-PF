<script>
	import Certificates from '../shared/Certificates.svelte';
	import ListItems from '../shared/ListItems.svelte';
</script>

<section class="bg-image">
	<div class="container text-center">
		<div class="row text-dark pt-4">
			<div class="col">
				<h1>About Me</h1>
				<p
					class="text-wrap mx-auto fw-semibold fs-5 text-start float-start"
					style="max-width: 600px;"
				>
					I am a versatile fullstack software engineer specializing in modern frameworks like
					SvelteKit for building scalable, responsive, and SEO-optimized web applications. I have
					expertise in backend technologies such as Django, Flask, and Express.js, which enable me
					to integrate robust server-side functionality with dynamic, fast-loading frontends. My
					experience spans working with databases like PostgreSQL, MySQL, and MongoDB, as well as
					deploying applications on cloud platforms like Vercel and cPanel.
				</p>
				<p class="text-wrap mx-auto fw-medium fs-5 text-end float-end" style="max-width: 600px;">
					With a keen eye for responsive design using frameworks like Bootstrap and TailwindCSS, I
					ensure that applications deliver an optimal user experience across devices while
					maintaining strong search engine visibility. I am currently expanding my backend knowledge
					by learning Golang to further enhance my skill set.
				</p>
			</div>
		</div>
		<div class="row text-dark mt-5">
			<div class="col">
				<h1>What I Do</h1>
				<ul class="list-group">
					<ListItems
						ListItems={[
							{
								head: 'Backend Development:',
								body: 'Expertise in NodeJS, Express JS, Django and Flask to build powerful server-side applications.'
							},
							{
								head: 'Database Management:',
								body: 'Skilled in PostgreSQL and MongoDB with experience in designing and optimizing databases.'
							},
							{
								head: 'API Development:',
								body: 'Building RESTful APIs endpoints to enable seamless data exchange.'
							},
							{
								head: 'Frontend Integration:',
								body: 'Integrating SvelteKit and Bootstrap/TailwindCSS for responsive and dynamic user interfaces.'
							}
						]}
					/>
				</ul>
			</div>
		</div>

		<div class="row mt-5">
			<h4>Certificates:</h4>

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
	.bg-image {
		background-image: url('../lib/img/techStack8.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
</style>
