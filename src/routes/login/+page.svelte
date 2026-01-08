<script>
	export let form; // För att visa fel-meddelanden från servern
	import { enhance } from '$app/forms';

	let loading = false;
</script>

<h1>Login</h1>

<form method="POST" action="?/login">
	<div>
		<label for="username">Username:</label>
		<!-- Din input här - vilka attribut behöver den? -->
		<input id="username" type="text" name="username" required placeholder="username.." />
	</div>

	<!-- Din uppgift: Lägg till password-fält på samma sätt -->
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
<!-- Register-formulär -->
<!-- Din uppgift: Skapa register-formuläret -->
<!-- Tips: använd action="?/register" -->

<!-- Visa fel-meddelanden om de finns -->
{#if form?.error}
	<div class="error">{form.error}</div>
{/if}

<style>
	/* Din uppgift: Lägg till styling */
	/* Tips: formulär behöver struktur och spacing */
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
