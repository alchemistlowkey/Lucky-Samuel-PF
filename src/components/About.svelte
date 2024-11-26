<script>
	import Certificates from '../shared/Certificates.svelte';
	import ListItems from '../shared/ListItems.svelte';
	import Bg from '../shared/Bg.svelte';
</script>

<Bg Bg="techStack8.jpg">
	<h1 class="text-center p-4 text-success-800 text-3xl">About Me</h1>

	<div class="grid lg:grid-cols-2 md:p-5">
		<div class="card card-compact bg-transparent shadow-2xl">
			<div class="card-body">
				<p
					class="font-semibold text-start md:text-lg"
				>
					I am a versatile fullstack software engineer specializing in modern frameworks like
					SvelteKit for building scalable, responsive, and SEO-optimized web applications. I have
					expertise in backend technologies such as Django, Flask, and Express.js, which enable me
					to integrate robust server-side functionality with dynamic, fast-loading frontends. My
					experience spans working with databases like PostgreSQL, MySQL, and MongoDB, as well as
					deploying applications on cloud platforms like Vercel and cPanel.
				</p>
			</div>
		</div>
		<div class="card card-compact bg-transparent shadow-2xl">
			<div class="card-body">
				<p class="text-end font-medium md:text-lg">
					With a keen eye for responsive design using frameworks like Bootstrap and TailwindCSS, I
					ensure that applications deliver an optimal user experience across devices while
					maintaining strong search engine visibility. I am currently expanding my backend knowledge
					by learning Golang to further enhance my skill set.
				</p>
			</div>
		</div>
	</div>

	<h2 class="p-3 py-5 text-primary-900 text-2xl text-center">What I do</h2>
	<div class="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3">
		<div class="card card-compact glass bg-primary-50">
			<div class="card-body">
				<div class="card-title">Frontend Development:</div>
				Expertise in SvelteKit, React, and Vue to build responsive and SEO-optimized web applications.
			</div>
		</div>
		<div class="card card-compact glass bg-danger-50">
			<div class="card-body">
				<div class="card-title">Backend Development:</div>
				Expertise in NodeJS, Express JS, Django and Flask to build powerful server-side applications.
			</div>
		</div>
		<div class="card card-compact glass bg-warning-50">
			<div class="card-body">
				<div class="card-title">Database Management:</div>
				Skilled in PostgreSQL, MySQL, Supabase and MongoDB with experience in designing and optimizing
				databases.
			</div>
		</div>
		<div class="card card-compact glass bg-success-50">
			<div class="card-body">
				<div class="card-title">API Development:</div>
				Building RESTful APIs endpoints to enable seamless data exchange.
			</div>
		</div>
		<div class="card card-compact glass bg-info-50">
			<div class="card-body">
				<div class="card-title">Frontend Integration:</div>
				Integrating SvelteKit and Bootstrap/TailwindCSS for responsive and dynamic user interfaces.
			</div>
		</div>
	</div>

	<div class="container text-center xl:p-5">
		<h4 class="p-4 text-2xl text-success-900">Certificates:</h4>
		<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto">
			<Certificates
				Certificates={[
					{
						src: '/images/cert.png',
						alt: 'Career Essentials in Software Development'
					},
					{
						src: '/images/cert1.png',
						alt: 'Career Skills in software development'
					},
					{
						src: '/images/cert2.png',
						alt: 'Programming Foundations: Fundamentals'
					},
					{
						src: '/images/cert3.png',
						alt: 'Programming Foundations: Beyond the fundamentals'
					},
					{
						src: '/images/English1.png',
						alt: 'English for IT Professionals 1'
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
</Bg>

<style>
	.card {
		margin: 0.5rem;
		text-align: center;
		transition: transform 0.2s; /* Add a smooth transition effect */
	}

	.card-title {
		color: darkslategrey;
		margin: 0 auto;
	}

	.card:hover {
		transform: scale(1.02); /* Scale up on hover */
	}
</style>
