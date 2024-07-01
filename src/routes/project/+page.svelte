<script>
	import Fa from 'svelte-fa';
	import { faGasPump, faScissors } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<section>
	<div class="container text-center">
		<h2>Projects</h2>
		<div class="row">
			<div class="col bg-success rounded m-2">
				<h3><Fa icon={faGasPump} /> Fuel Price Locator</h3>
				<p>
					Fuel Price Locator is an innovative application designed to help users find the most
					affordable petroleum products in their vicinity.
				</p>
				<a
					class="text-white"
					href="https://github.com/alchemistlowkey/fuelpricelocator.git"
					target="_blank"
				>
					<Fa icon={faGithub} /></a
				>
			</div>
			<div class="col bg-success rounded m-2">
				<h3><Fa icon={faScissors} /> Tailors Online</h3>
				<p>
					This platform connects users with talented tailors, providing a seamless experience in
					finding the right designer for your fabrics.
				</p>
				<a
					class="text-white"
					href="https://github.com/alchemistlowkey/tailors_online.git"
					target="_blank"
				>
					<Fa icon={faGithub} /></a
				>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: 2em;
	}
</style>
