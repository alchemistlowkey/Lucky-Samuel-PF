<script>
	let projects = [
		{ title: 'Project 1', description: 'Description of project 1.' },
		{ title: 'Project 2', description: 'Description of project 2.' }
		// Add more projects as needed
	];
</script>

<main>
	<header>
		<a href="/"><img src="/LS.png" class="img-fluid d-inline-block" alt="site logo" /></a>
		<nav class="float-end nav flex-lg-column">
			<div class="pagination">
				<a class="nav-item nav-link link-primary rounded bg-secondary text-white" href="/about"><i class="bi-person"></i> About</a>
				<a class="nav-item nav-link link-success rounded bg-secondary text-white" href="/project"><i class="bi-stickies"></i> Projects</a>
				<a class="nav-item nav-link link-danger rounded bg-secondary text-white" href="/skills"><i class="bi-person-lines-fill"></i> Skills</a>
				<a class="nav-item nav-link link-warning rounded bg-secondary text-white" href="/contact"><i class="bi-envelope"></i> Contact</a>
			</div>
		</nav>
	</header>

	<slot />

	<footer>
		<p>&copy; 2024 Lucky Samuel</p>
	</footer>
</main>

<style>
	img {
		max-width: 5%;
		/* filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%); */
		border-radius: 50%;
	}
	header {
		background: #333;
		color: #fff;
		padding: 1em;
	}
	nav a {
		color: #fff;
		margin: 0 1em;
		text-decoration: none;
	}
	footer {
		background: #333;
		color: #fff;
		text-align: center;
		padding: 1em;
		margin-top: 1em;
		border-top: dotted 1px blanchedalmond;
	}
</style>
