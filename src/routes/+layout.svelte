<script>
	export let data;
</script>

<nav class="main-nav">
	<div class="nav-left">
		<a href="/">Home</a>
		{#if data.user}
			<a href="/dashboard">Dashboard</a>
			<a href="/games">Games</a>
			<a href="/characters">Characters</a>
		{/if}
	</div>

	<div class="nav-right">
		{#if data.user}
			<span>CURRENTLY LOGGED IN AS {data.user.username.toUpperCase()}</span>
			<form method="POST" action="/login?/logout" style="display: inline;">
				<button type="submit">Logga ut</button>
			</form>
		{:else}
			<a href="/login">Log in / Register</a>
		{/if}
	</div>
</nav>

<main>
	<slot />
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.main-nav {
		background: linear-gradient(to bottom, #4a4029 0%, #352d1f 100%);
		border-bottom: 3px solid #5d4c2a;
		padding: 12px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
	}

	.nav-left,
	.nav-right {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	.nav-left a,
	.nav-right a {
		color: #e3d4a4;
		text-decoration: none;
		font-weight: bold;
		font-size: 15px;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 8px 16px;
		border: 1px solid #6b5b34;
		background: linear-gradient(to bottom, #55482a 0%, #3f3522 100%);
		border-radius: 2px;
		transition: all 0.2s ease;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	}

	.nav-left a:hover,
	.nav-right a:hover {
		background: linear-gradient(to bottom, #6b5b34 0%, #55482a 100%);
		border-color: #8a7948;
		color: #f5e6b8;
		box-shadow: 0 0 8px rgba(229, 191, 92, 0.3);
	}

	.nav-right span {
		color: #b8a87a;
		font-family: 'Courier New', monospace;
		font-size: 13px;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
		padding: 6px 12px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid #4a4029;
		border-radius: 2px;
	}

	button[type='submit'] {
		background: linear-gradient(to bottom, #8b211e 0%, #5a1513 100%);
		color: #f0d0a0;
		border: 1px solid #a8322e;
		padding: 8px 20px;
		font-family: 'Verdana', sans-serif;
		font-weight: bold;
		font-size: 14px;
		text-transform: uppercase;
		cursor: pointer;
		border-radius: 2px;
		letter-spacing: 0.5px;
		transition: all 0.2s ease;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	}

	button[type='submit']:hover {
		background: linear-gradient(to bottom, #a8322e 0%, #8b211e 100%);
		border-color: #c04541;
		color: #ffebc2;
		box-shadow: 0 0 10px rgba(168, 50, 46, 0.5);
	}

	main {
		padding: 24px;
		min-height: calc(100vh - 68px);
		background:
			url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233d3525' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E"),
			linear-gradient(to bottom, #2c2416 0%, #3d3525 100%);
	}

	/* Scrollbar styling for that early 2000s feel */
	::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {
		background: #2c2416;
		border-left: 1px solid #5d4c2a;
	}

	::-webkit-scrollbar-thumb {
		background: linear-gradient(to bottom, #6b5b34 0%, #4a4029 100%);
		border: 1px solid #8a7948;
		border-radius: 2px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: linear-gradient(to bottom, #8a7948 0%, #6b5b34 100%);
	}
</style>
