<script>
	import Fa from 'svelte-fa';
	import { faGasPump, faScissors } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<section class="bg-image">
	<div class="container text-center">
		<h2 class="text-danger">Projects</h2>
		<div class="row">
			<div class="col bg-none rounded m-2">
				<h3 class="text-primary p-3"><Fa icon={faGasPump} /> Fuel Price Locator</h3>
				<p class="text-black">
					Fuel Price Locator is an innovative application designed to help users find the most
					affordable petroleum products in their vicinity.
				</p>
				<a
					class="text-white link-danger"
					href="https://github.com/alchemistlowkey/fuelpricelocator.git"
					target="_blank"
				>
					<Fa icon={faGithub} /></a
				>
			</div>
			<div class="col rounded m-2">
				<h3 class="text-warning p-3"><Fa icon={faScissors} /> Tailors Online</h3>
				<p class="text-black">
					This platform connects users with talented tailors, providing a seamless experience in
					finding the right designer for your fabrics.
				</p>
				<a
					class="text-white link-primary"
					href="https://github.com/alchemistlowkey/tailors_online.git"
					target="_blank"
				>
					<Fa icon={faGithub} /></a
				>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<a href="https://www.fuelpricelocator.live/" class="" target="_blank"
					><img src="/fuelpricebg.png" class="img-fluid d-inline-block rounded" alt="site logo" /></a
				>
			</div>

			<div class="col">
				<a href="/" class="disabled-link" target="_blank"
					><img
						src="/TailorsOnline.png"
						class="img-fluid d-inline-block rounded"
						alt="site logo"
					/></a
				>
				<a href="/" class="disabled-link"
					><img
						src="/TailorsOnline2.png"
						class="img-fluid d-inline-block rounded"
						alt="site logo"
					/></a
				>
				<a href="/" class="disabled-link"
					><img
						src="/TailorsOnline3.png"
						class="img-fluid d-inline-block rounded"
						alt="site logo"
					/></a
				>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: 2em;
	}
	.disabled-link {
		pointer-events: none;
		cursor: default;
		color: gray;
		text-decoration: none;
	}
	.bg-image{
		background-image: url('../../lib/techStack9.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
</style>
