<script>
	import { onMount } from 'svelte';
	let contacts = [];
	let error = '';

	const handleLogout = async () => {
		const response = await fetch('http://localhost:5000/api/logout', {
			method: 'POST',
			credentials: 'include'
		});

		const data = await response.json();
		if (data.success) {
			window.location.href = '/';
		} else {
			error = data.message;
		}
	};

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:5000/api/contacts', {
				credentials: 'include'
			});
			if (response.ok) {
				const data = await response.json();
				contacts = data.contacts;
			} else {
				error = 'Failed to fetch contacts';
			}
		} catch (err) {
			error = 'Error fetching contacts';
		}
	});
</script>

<section class="contacts-section bg-image">
	<div class="container">
		<div class="float-end mb-2">
			<button class="rounded btn btn-warning" on:click={handleLogout}>Logout</button>
		</div>
		{#if error}
			<p>{error}</p>
		{/if}
		<div class="">
		{#if contacts.length > 0}
			<table class="table table-striped table-primary rounded-3 overflow-hidden">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Message</th>
					</tr>
				</thead>
				<tbody>
					{#each contacts as contact}
						<tr>
							<td>{contact.name}</td>
							<td>{contact.email}</td>
							<td>{contact.message}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{:else}
			<p>No contacts found.</p>
		{/if}
		</div>
	</div>
</section>

<style>
	.contacts-section {
		padding: 2em;
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th,
	td {
		padding: 8px;
		text-align: left;
		border-bottom: 1px solid #ddd;
	}
	.bg-image {
		background-image: url('../../lib/techStack5.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}
</style>
