<script>
	import Image from '../shared/Image.svelte';
	import Bg from '../shared/Bg.svelte';
	import ListItems from '../shared/ListItems.svelte';
</script>

<Bg Bg="/techStack11.jpg">
	<div class="container pt-5">
		<h2 class="pt-2 pb-3">Skills</h2>
		<ul class="list-group">
			<li
				class="list-group-item d-flex
			justify-content-between
			align-items-center list-group-item-success"
			>
				Frontend<span class="badge">
					<Image
						Img={[
							{
								src: 'https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg',
								alt: 'svelte'
							},
							{ src: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', alt: 'react' }
						]}
					/>
				</span>
			</li>
			<li
				class="list-group-item d-flex
						justify-content-between
						align-items-center list-group-item-primary"
			>
				Backend<span class="badge">
					<Image
						Img={[
							{ src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', alt: 'NodeJS' },
							{
								src: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
								alt: 'expressJS'
							},
							{
								src: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg',
								alt: 'Django'
							},
							{
								src: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg',
								alt: 'Flask'
							}
						]}
					/>
				</span>
			</li>

			<li
				class="list-group-item d-flex
                        justify-content-between
                        align-items-center list-group-item-danger"
			>
				Database <span class="badge">
					<Image
						Img={[
							{
								src: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
								alt: 'postgresql'
							},
							{ src: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg', alt: 'mysql' },
							{
								src: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
								alt: 'mongodb'
							}
						]}
					/>
				</span>
			</li>
			<li
				class="list-group-item d-flex
                        justify-content-between
                        align-items-center list-group-item-dark"
			>
				DevOps<span class="badge">
					<Image
						Img={[
							{ src: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', alt: 'Docker' },
							{
								src: 'https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg',
								alt: 'Vagrant'
							},
							{ src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', alt: 'Git' },
							{
								src: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
								alt: 'Bash'
							},
							{ src: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg', alt: 'Linux' }
						]}
					/>
				</span>
			</li>
			<li
				class="list-group-item d-flex
			justify-content-between
			align-items-center list-group-item-success"
			>
				IDE<span class="badge">
					<Image
						Img={[
							{
								src: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg',
								alt: 'VSCode'
							},
							{ src: 'https://www.vectorlogo.zone/logos/vim/vim-icon.svg', alt: 'VIM' },
							{ src: 'https://www.svgrepo.com/download/354237/pycharm.svg', alt: 'Pycharm' }
						]}
					/>
				</span>
			</li>
			<li
				class="list-group-item d-flex
                        justify-content-between
                        align-items-center list-group-item-warning"
			>
				Others<span class="badge">
					<Image
						Img={[
							{
								src: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
								alt: 'Javascript'
							},
							{ src: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg', alt: 'HTML5' },
							{ src: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg', alt: 'CSS3' },
							{
								src: 'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg',
								alt: 'Bootstrap'
							},
							{
								src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
								alt: 'TailwindCSS'
							},
							{
								src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
								alt: 'Postman'
							}
						]}
					/>
				</span>
			</li>
		</ul>
	</div>
	<div class="container mt-5 rounded">
		<h1 class="pt-2 pb-3 fw-semibold">Skills Summary</h1>
		<ul class="list-group p-1 fw-semibold">
			<ListItems
				ListSkills={[
					{
						head: 'Frontend Development',
						TextBlue: true,
						top: 'Skilled in React, Svelte and SvelteKit for creating modern, reactive web applications.',
						bottom: 'Use of Bootstrap for responsive and aesthetically pleasing design.'
					},
					{
						head: 'Backend Development Expertise',
						TextYellow: true,
						top: 'Experience with Express JS and Node.js for creating efficient backend services.',
						bottom:
							'Proficiency in Django and Flask for building robust and scalable web applications.'
					},
					{
						head: 'Database Management',
						TextGreen: true,
						top: 'Proficient in PostgreSQL and MongoDB for managing and querying complex data.',
						bottom: 'Experience hosting databases on Supabase.'
					},
					{
						head: 'Deployment and DevOps',
						TextRed: true,
						top: 'Expertise in deploying applications on Azure virtual Linux servers.',
						bottom: 'Familiarity with deploying SvelteKit apps and Node.js backends on Vercel.'
					},
					{
						head: 'Full-Stack Development',
						TextIndigo: true,
						top: 'Ability to seamlessly integrate frontend and backend technologies for complete web solutions.',
						bottom: 'Experience with user authentication management in full-stack applications.'
					},
					{
						head: 'Project Experience',
						TextPurple: true,
						top: 'Practical experience gained from the ALX program, working on challenging tasks and real-world projects.',
						bottom:
							'Developed a portfolio project using Svelte for the front end and Express JS for the backend.'
					},
					{
						head: 'Continuous Learning and Adaptability',
						TextPink: true,
						top: 'Commitment to broadening knowledge and taking on more challenging tasks to improve coding skills.',
						bottom:
							'Writing technical blog posts to share knowledge and contribute to the developer community.'
					}
				]}
			/>
		</ul>
	</div>
</Bg>

<style>
</style>
