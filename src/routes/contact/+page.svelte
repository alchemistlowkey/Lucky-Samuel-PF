<script>
	import Fa from 'svelte-fa';
	import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<section class="bg-light bg-image">
	<div class="container">
		<div class="sm-m-top-50 text-center justify-content-center row">
			<form class="form-inline m-top-30" method="post" action="">
				<div class="form-group col">
					<input type="text" class="form-control m-1" placeholder="Enter your Name" />
					<input type="email" class="form-control m-1" placeholder="Enter your Email" />
					<textarea type="email" class="form-control m-1" placeholder="Enter your Message"></textarea>
					<button type="submit" class="btn btn-success text-center"><Fa icon={faEnvelope} /></button>
				</div>
			</form>
		</div>
	</div>
</section>

<style>
	section {
		padding: 2em;
	}
	.bg-image{
		background-image: url('../../lib/techStack1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
	form{
		max-width: 600px;
	}
</style>
