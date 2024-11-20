<script>
	import ListItems from '../shared/ListItems.svelte';
	import Bg from '../shared/Bg.svelte';
</script>

<Bg NavBg="footer-image1.jpg">
	<div class="container-fluid">
		<nav class="navbar navbar-expand-lg navbar-dark">
			<a class="navbar-brand" href="/">
				<img
					src="/images/LS_dc.png"
					class="img-fluid nav-link float-start bg-white"
					alt="site logo"
					loading="lazy"
				/>
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
					<ListItems
						ListNavItems={[
							{ href: '/resume', icon: 'bi-file-pdf-fill', text: 'Resume' },
							{ href: '/about', icon: 'bi-person-fill', text: 'About' },
							{ href: '/project', icon: 'bi-stickies-fill', text: 'Projects' },
							{ href: '/skills', icon: 'bi-person-lines-fill', text: 'Skills' },
							{ href: '/invoice', icon: 'bi-receipt', text: 'invoice' },
							{ href: '/contact', icon: 'bi-envelope-fill', text: 'Contact' }
						]}
					/>
				</ul>
			</div>
		</nav>
	</div>
</Bg>

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
	/* .fix {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	} */
</style>
