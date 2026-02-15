<script>
	export let form;
	import { enhance } from '$app/forms';

	let loading = false;
</script>

<form class="login-form" method="POST" action="?/login">
	<div class="username-login">
		<label for="username">Username:</label>
		<input id="username" type="text" name="username" required placeholder="username.." />
	</div>
	<div class="password-login">
		<label for="password">Password:</label>
		<input id="password" type="password" name="password" required placeholder="password.." />

		<button class="login-button" type="submit">Logga in</button>
	</div>
</form>

<h2 class="new-user-header">NEW USER?</h2>

<form class="register-form" method="POST" action="?/register">
	<div class="username-signup">
		<label for="new-username">Username:</label>

		<input id="new-username" type="text" name="new-username" required placeholder="username.." />
	</div>

	<div class="password-signup">
		<label for="new-password">Password:</label>
		<input
			id="new-password"
			type="password"
			name="new-password"
			required
			placeholder="password.."
		/>
	</div>

	<button class="register-button" type="submit">Registrera</button>
</form>

{#if form?.error}
	<div class="error">{form.error}</div>
{/if}

<style>
	:global(body) {
		background: #2b2b2b;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
		color: #d4d4d4;
	}

	h1 {
		color: #ff8c00;
		text-transform: uppercase;
		font-size: 2rem;
		letter-spacing: 2px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
		margin-bottom: 1.5rem;
		border-bottom: 3px solid #ff8c00;
		padding-bottom: 0.5rem;
	}

	h2.new-user-header {
		color: #b27621;
		text-transform: uppercase;
		font-size: 1.3rem;
		letter-spacing: 1px;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	form {
		background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
		margin-bottom: 2rem;
		padding: 1.5rem;
		border: 2px solid #3a3a3a;
		border-radius: 0;
		max-width: 450px;
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.05),
			0 4px 8px rgba(0, 0, 0, 0.6);
	}

	div {
		margin-bottom: 1.2rem;
	}

	label {
		display: block;
		margin-bottom: 0.4rem;
		font-weight: bold;
		color: #cccccc;
		text-transform: uppercase;
		font-size: 0.85rem;
		letter-spacing: 0.5px;
	}

	input {
		width: 100%;
		padding: 0.7rem;
		box-sizing: border-box;
		background: #0a0a0a;
		border: 2px solid #555;
		color: #fff;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		transition: border-color 0.2s;
	}

	input:focus {
		outline: none;
		border-color: #ff8c00;
		box-shadow: 0 0 8px rgba(255, 140, 0, 0.3);
	}

	input::placeholder {
		color: #666;
		font-style: italic;
	}

	button {
		background: linear-gradient(180deg, #ff8c00 0%, #cc6600 100%);
		color: #000;
		border: 2px solid #ff8c00;
		padding: 0.8rem 2rem;
		font-weight: bold;
		text-transform: uppercase;
		cursor: pointer;
		font-size: 0.95rem;
		letter-spacing: 1px;
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.3),
			0 3px 6px rgba(0, 0, 0, 0.5);
		transition: all 0.15s;
		margin-top: 0.5rem;
	}

	button:hover {
		background: linear-gradient(180deg, #ffaa33 0%, #ff8c00 100%);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.4),
			0 4px 8px rgba(255, 140, 0, 0.4);
	}

	button:active {
		background: linear-gradient(180deg, #cc6600 0%, #994d00 100%);
		box-shadow:
			inset 0 2px 4px rgba(0, 0, 0, 0.5),
			0 1px 2px rgba(0, 0, 0, 0.3);
		transform: translateY(1px);
	}

	.login-button {
		width: 100%;
	}

	.register-button {
		width: 100%;
		background: linear-gradient(180deg, #5a9e3a 0%, #3d7a25 100%);
		border-color: #5a9e3a;
	}

	.register-button:hover {
		background: linear-gradient(180deg, #6bb845 0%, #5a9e3a 100%);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.4),
			0 4px 8px rgba(90, 158, 58, 0.4);
	}

	.register-button:active {
		background: linear-gradient(180deg, #3d7a25 0%, #2a5519 100%);
	}

	.error {
		color: #ff3333;
		font-weight: bold;
		background: rgba(255, 0, 0, 0.1);
		border: 2px solid #ff3333;
		padding: 1rem;
		margin-top: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		box-shadow: 0 0 10px rgba(255, 51, 51, 0.3);
	}
</style>
