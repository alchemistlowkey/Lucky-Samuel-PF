<script>
	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { onMount } from 'svelte';
	import Bg from "../shared/Bg.svelte";

	let name = '';
	let email = '';
	let message = '';
	let successMessage = '';

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, message })
		});

		if (response.ok) {
			successMessage = 'Message sent successfully';
			name = '';
			email = '';
			message = '';
		} else {
			successMessage = 'Error sending message';
		}
	};
</script>

<Bg Bg="techStack1.jpg">
	<div class="container pb">
		<div class="sm-m-top-50 text-center justify-content-center row">
			<form class="form-inline m-top-30" on:submit={handleSubmit}>
				<div class="form-group col">
					<input
						type="text"
						class="form-control m-1"
						placeholder="Enter your Name"
						bind:value={name}
						required
					/>
					<input
						type="email"
						class="form-control m-1"
						placeholder="Enter your Email"
						bind:value={email}
						required
					/>
					<textarea
						class="form-control m-1"
						placeholder="Enter your Message"
						bind:value={message}
						required
					></textarea>
					<button type="submit" class="btn btn-success text-center"><Fa icon={faEnvelope} /></button
					>
				</div>
			</form>
			{#if successMessage}
				<p>{successMessage}</p>
			{/if}
		</div>
	</div>
</Bg>

<style>
	form {
		max-width: 600px;
	}
	.pb {
		padding-bottom: 400px;
	}
	.btn-success:hover {
		background-color: skyblue;
	}
</style>