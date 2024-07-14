<script>
	let projects = [
		{ title: 'Project 1', description: 'Description of project 1.' },
		{ title: 'Project 2', description: 'Description of project 2.' }
		// Add more projects as needed
	];
</script>

<main>
	<div class="container-fluid bg-dark pt-2 header-image">
		<div class="row">
			<div class="col">
				<ul class="nav justify-content-start">
					<li class="nav-item">
						<a href="/"><img src="/LS.png" class="img-fluid nav-link float-start" alt="site logo" /></a>
					</li>
				</ul>
			</div>
			<div class="col">
				<ul class="nav justify-content-end">
					<li class="nav-item pt-1">
						<a class="nav-link link-primary rounded bg-secondary text-white" href="/about"
							><i class="bi-person"></i> About</a
						>
					</li>
					<li class="nav-item pt-1">
						<a class="nav-link link-success rounded bg-secondary text-white" href="/project"
							><i class="bi-stickies"></i> Projects</a
						>
					</li>
					<li class="nav-item pt-1">
						<a class="nav-link link-danger rounded bg-secondary text-white" href="/skills"
							><i class="bi-person-lines-fill"></i> Skills</a
						>
					</li>
					<li class="nav-item pt-1">
						<a class="nav-link link-warning rounded bg-secondary text-white" href="/contact"
							><i class="bi-envelope"></i> Contact</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<slot />

	<footer class="footer-image border-0 m-0">
		<p>&copy; 2024 Lucky Samuel</p>
	</footer>
</main>

<style>
	img {
		max-width: 90px;
		filter: invert(100%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
		border-radius: 50%;
	}
	/* .header {
		background: #333;
		color: #fff;
		padding: 1em;
	} */
	a {
		color: #fff;
		margin: 0 1em;
		text-decoration: none;
	}
	footer {
		background: #333;
		color: whitesmoke;
		text-align: center;
		padding: 1em;
	}
	.footer-image{
		background-image: url('footer-image2.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
	.header-image{
		background-image: url('footer-image1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
</style>
