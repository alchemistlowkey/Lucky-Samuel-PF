<script>
	import Fa from 'svelte-fa';
	import { faFlag } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faXTwitter, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faMedium } from '@fortawesome/free-brands-svg-icons';
	import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import { faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
</script>

<section class="text-center bg-image pb-4 pt-4 d-flex align-items-center min-vh-100">
	<div class="container-fluid">
		<div class="row text-dark">
			<div class="col">
				<h1>Lucky Samuel | Backend Software Engineer</h1>
				<p class="text-wrap mx-auto fw-bold" style="max-width: 600px;">
					Building Robust & Scalable Web Applications
				</p>
			</div>
		</div>
		
		<div class="row mt-4 text-black w-2">
			<h1>Get In Touch</h1>
			<p>
				I’m always open to new opportunities and collaborations. Whether you have a project idea or
				just want to connect, feel free to reach out!
			</p>
			<div class="col bg-linkedIn text-black rounded p-4 m-2">
				<p>LinkedIn profile</p>
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<a
							class="page-link bg-primary link-warning text-white"
							href="https://www.linkedin.com/in/lucky-samuel/"
							target="_blank"
						>
							<Fa icon={faLinkedin} /></a
						>
					</li>
				</ul>
			</div>
			<div class="col bg-twitter text-black rounded p-4 m-2">
				<p>Twitter profile</p>
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<a
							class="page-link bg-success link-danger text-white"
							href="https://x.com/alchemistlowkey"
							target="_blank"
						>
							<Fa icon={faXTwitter} /></a
						>
					</li>
				</ul>
			</div>
			<div class="col bg-github rounded p-4 m-2">
				<p>Github profile</p>
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<a
							class="page-link bg-secondary link-info text-white"
							href="https://github.com/alchemistlowkey"
							target="_blank"
						>
							<Fa icon={faGithub} /></a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="row mt-5">
			<!-- <h4>Certificates:</h4> -->
			<div class="col mt-2">
				<a href="/" class="disabled-link"
					><img src="/ALX-cert.png" class="img-fluid d-inline-block rounded" alt="site logo" /></a
				>
			</div>
			<div class="col mt-2">
				<a href="/" class="disabled-link"
					><img src="/cert.png" class="img-fluid d-inline-block rounded" alt="site logo" /></a
				>
			</div>
			<div class="col mt-2">
				<a href="/" class="disabled-link"
					><img src="/English1.png" class="img-fluid d-inline-block rounded" alt="site logo" /></a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.disabled-link {
		pointer-events: none;
		cursor: default;
		color: gray;
		text-decoration: none;
	}
	/* .bg-image{
		background-image: url('../lib/techStack6.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
	} */
	.bg-twitter {
		background-image: url('../lib/x.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
	.bg-linkedIn {
		background-image: url('../lib/linkedin5.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
	.bg-github {
		background-image: url('../lib/github2.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
</style>
