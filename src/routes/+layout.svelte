<script>
	
</script>

<main>
	<div class="container-fluid bg-dark pt-2 header-image">
		<nav class="navbar navbar-expand-lg navbar-dark">
			<a class="navbar-brand" href="/">
				<img src="/LS.png" class="img-fluid nav-link float-start" alt="site logo" />
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon bg-secondary fs-1 rounded-3"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item pt-1">
						<a class="nav-link link-primary rounded bg-secondary text-white text-end pe-3" href="/resume">
							<i class="bi-person"></i> Resume
						</a>
					</li>
					<li class="nav-item pt-1">
						<a class="nav-link link-primary rounded bg-secondary text-white text-end pe-3" href="/about">
							<i class="bi-person"></i> About
						</a>
					</li>
					<li class="nav-item pt-1">
						<a class="nav-link link-success rounded bg-secondary text-white text-end pe-3" href="/project">
							<i class="bi-stickies"></i> Projects
						</a>
					</li>
					<li class="nav-item pt-1">
						<a class="nav-link link-danger rounded bg-secondary text-white text-end pe-3" href="/skills">
							<i class="bi-person-lines-fill"></i> Skills
						</a>
					</li>
					<li class="nav-item pt-1">
						<a class="nav-link link-warning rounded bg-secondary text-white text-end pe-3" href="/contact">
							<i class="bi-envelope"></i> Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
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
	.footer-image {
		background-image: url('../lib/footer-image2.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
	.header-image {
		background-image: url('../lib/footer-image1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
</style>
