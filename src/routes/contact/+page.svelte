<script>
	import Fa from 'svelte-fa';
	import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<section class="bg-light">
	<div class="container">
		<div class="sm-m-top-50 text-center row">
			<h5 class="text-dark">Contact me</h5>
			<form class="form-inline m-top-30" method="post" action="">
				<div class="form-group col">
					<input type="text" class="form-control m-1" placeholder="Enter your Name" />
					<input type="email" class="form-control m-1" placeholder="Enter your Email" />
					<textarea type="email" class="form-control m-1" placeholder="Enter your Message"></textarea>
					<button type="submit" class="btn text-center"><Fa icon={faEnvelope} /></button>
				</div>
			</form>
		</div>
	</div>
</section>

<style>
	section {
		padding: 2em;
	}
</style>
