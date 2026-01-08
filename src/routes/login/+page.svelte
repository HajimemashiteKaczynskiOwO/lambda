<script>
	export let form; 
	import { enhance } from '$app/forms';

	let loading = false;
</script>

<h1>Login</h1>

<form method="POST" action="?/login">
	<div>
		<label for="username">Username:</label>
		<input id="username" type="text" name="username" required placeholder="username.." />
	</div>
	<div>
		<label for="password">Password:</label>
		<input id="password" type="password" name="password" required placeholder="password.." />

		<button type="submit">Logga in</button>
	</div>
</form>

<h2>Ny användare?</h2>

<form method="POST" action="?/register">
	<div>
		<label for="new-username">Username:</label>
		<input id="new-username" type="text" name="new-username" required placeholder="username.." />
	</div>

	<div>
		<label for="new-password">Password:</label>
		<input
			id="new-password"
			type="password"
			name="new-password"
			required
			placeholder="password.."
		/>
	</div>

	<button type="submit">Registrera</button>
</form>

{#if form?.error}
	<div class="error">{form.error}</div>
{/if}

<style>
	form {
		margin-bottom: 2rem;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		max-width: 400px;
	}
	div {
		margin-bottom: 1rem;
	}
	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}
	input {
		width: 100%;
		padding: 0.5rem;
		box-sizing: border-box;
	}
	.error {
		color: red;
		font-weight: bold;
	}
</style>
