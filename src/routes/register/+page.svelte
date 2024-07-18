<script>
	let username = '';
	let password = '';
	let errorMessage = '';

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		const data = await response.json();
		if (data.success) {
			errorMessage = '';
			// Redirect to login page
			window.location.href = '/login';
		} else {
			errorMessage = data.message;
		}
	};
</script>

<section class="bg-light bg-image p-3">
	<div class="container">
		<div class="sm-m-top-50 text-center justify-content-center row">
			<form class="form-inline m-top-30" on:submit={handleSubmit}>
			<div class="form-group col">
				<input type="text"
				class="form-control m-1"
				placeholder="Enter your Username" bind:value={username} required />
			</div>
			<div>
				<input type="password" id="password" class="form-control m-1"
				placeholder="Enter your Password" bind:value={password} required />
			</div>
			<button type="submit" class="btn btn-success text-center">Sign Up</button>
		</form>
		{#if errorMessage}
			<p>{errorMessage}</p>
		{/if}
	</div>
</section>

<style>
	section {
		padding: 2em;
	}
	.bg-image {
		background-image: url('../../lib/techStack3.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
	form {
		max-width: 600px;
	}
</style>
