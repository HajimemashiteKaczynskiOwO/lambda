<script>
	export let data;

	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let theme = data.theme;

	// set theme to dark bc who wants lightmode first!
	onMount(() => {
		document.documentElement.setAttribute('data-theme', theme);
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';

		if (browser) {
			// save theme in cookie
			document.cookie = `theme=${theme}; path=/; max-age=${60 * 60 * 24 * 365}`;
			// update dom
			document.documentElement.setAttribute('data-theme', theme);
		}
	}
</script>

<svelte:head>
	<script>
		// before render, set theme so no faults and no purple links
		(function () {
			const theme = document.cookie.match(/theme=([^;]+)/)?.[1] || 'dark';
			document.documentElement.setAttribute('data-theme', theme);
		})();
	</script>
</svelte:head>

<nav class="main-nav">
	<div class="nav-left">
		<button on:click={toggleTheme} class="theme-toggle">
			{theme === 'light' ? '🌙' : '☀️'}
		</button>
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
				<button type="submit">Log out</button>
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
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'Trebuchet MS', 'Arial', sans-serif;
		min-height: 100vh;
		transition:
			background 0.3s ease,
			color 0.3s ease;
		/* Default to dark theme */
		background: linear-gradient(to bottom, #1a1410 0%, #2d1f14 100%);
		color: #d4c4a8;
	}

	/* Dark theme - rusty industrial HL2 style */
	:global([data-theme='dark'] body) {
		background: linear-gradient(to bottom, #1a1410 0%, #2d1f14 100%);
		color: #d4c4a8;
	}

	/* Light theme - faded orange early web */
	:global([data-theme='light'] body) {
		background: linear-gradient(to bottom, #e8dcc8 0%, #d4c4a8 100%);
		color: #2d1f14;
	}

	.main-nav {
		padding: 10px 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: all 0.3s ease;
		/* Default dark theme */
		background: linear-gradient(to bottom, #3d2a18 0%, #2d1f14 100%);
		border-bottom: 2px solid #cc6600;
		box-shadow:
			0 2px 0 rgba(204, 102, 0, 0.3),
			0 4px 8px rgba(0, 0, 0, 0.6);
	}

	/* Nav bar theming */
	:global([data-theme='dark']) .main-nav {
		background: linear-gradient(to bottom, #3d2a18 0%, #2d1f14 100%);
		border-bottom: 2px solid #cc6600;
		box-shadow:
			0 2px 0 rgba(204, 102, 0, 0.3),
			0 4px 8px rgba(0, 0, 0, 0.6);
	}

	:global([data-theme='light']) .main-nav {
		background: linear-gradient(to bottom, #f4a460 0%, #d08040 100%);
		border-bottom: 2px solid #8b4513;
		box-shadow:
			0 2px 0 rgba(139, 69, 19, 0.3),
			0 4px 8px rgba(0, 0, 0, 0.2);
	}

	.nav-left,
	.nav-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	/* Theme toggle button */
	.theme-toggle {
		background: rgba(204, 102, 0, 0.1);
		border: 2px solid #cc6600;
		color: #ff9933;
		padding: 6px 10px;
		font-size: 18px;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	:global([data-theme='dark']) .theme-toggle {
		border-color: #cc6600;
		color: #ff9933;
		background: rgba(204, 102, 0, 0.1);
	}

	:global([data-theme='light']) .theme-toggle {
		border-color: #8b4513;
		color: #654321;
		background: rgba(139, 69, 19, 0.1);
	}

	.theme-toggle:hover {
		transform: scale(1.1);
		filter: brightness(1.3);
	}

	/* Nav links */
	.nav-left a,
	.nav-right a {
		text-decoration: none;
		font-weight: bold;
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		padding: 8px 14px;
		border: 2px solid;
		transition: all 0.2s ease;
		position: relative;
	}

	:global([data-theme='dark']) .nav-left a,
	:global([data-theme='dark']) .nav-right a {
		color: #ff9933;
		border-color: #cc6600;
		background: rgba(51, 34, 17, 0.6);
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	}

	:global([data-theme='light']) .nav-left a,
	:global([data-theme='light']) .nav-right a {
		color: #654321;
		border-color: #8b4513;
		background: rgba(255, 255, 255, 0.3);
		text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
	}

	:global([data-theme='dark']) .nav-left a:hover,
	:global([data-theme='dark']) .nav-right a:hover {
		background: rgba(204, 102, 0, 0.3);
		border-color: #ff9933;
		color: #ffb366;
		box-shadow: 0 0 10px rgba(255, 153, 51, 0.4);
	}

	:global([data-theme='light']) .nav-left a:hover,
	:global([data-theme='light']) .nav-right a:hover {
		background: rgba(255, 255, 255, 0.6);
		border-color: #654321;
		color: #3d1f0f;
		box-shadow: 0 0 8px rgba(101, 67, 33, 0.3);
	}

	/* User info span */
	.nav-right span {
		font-family: 'Courier New', monospace;
		font-size: 11px;
		font-weight: bold;
		padding: 6px 10px;
		border: 1px solid;
		letter-spacing: 1px;
	}

	:global([data-theme='dark']) .nav-right span {
		color: #ffb366;
		background: rgba(0, 0, 0, 0.4);
		border-color: #995200;
	}

	:global([data-theme='light']) .nav-right span {
		color: #654321;
		background: rgba(0, 0, 0, 0.1);
		border-color: #8b4513;
	}

	/* Logout button */
	button[type='submit'] {
		color: #fff;
		border: 2px solid;
		padding: 8px 16px;
		font-family: 'Trebuchet MS', sans-serif;
		font-weight: bold;
		font-size: 12px;
		text-transform: uppercase;
		cursor: pointer;
		letter-spacing: 0.5px;
		transition: all 0.2s ease;
	}

	:global([data-theme='dark']) button[type='submit'] {
		background: linear-gradient(to bottom, #8b3a00 0%, #5a2500 100%);
		border-color: #cc5500;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	}

	:global([data-theme='light']) button[type='submit'] {
		background: linear-gradient(to bottom, #cc5500 0%, #994400 100%);
		border-color: #662d00;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	}

	:global([data-theme='dark']) button[type='submit']:hover {
		background: linear-gradient(to bottom, #b34700 0%, #8b3a00 100%);
		border-color: #ff6600;
		box-shadow: 0 0 12px rgba(255, 102, 0, 0.5);
	}

	:global([data-theme='light']) button[type='submit']:hover {
		background: linear-gradient(to bottom, #ff6600 0%, #cc5500 100%);
		border-color: #4d2200;
		box-shadow: 0 0 10px rgba(204, 85, 0, 0.4);
	}

	main {
		padding: 20px;
		min-height: calc(100vh - 60px);
	}

	/* Scrollbar - industrial rusty look */
	:global(::-webkit-scrollbar) {
		width: 14px;
	}

	:global([data-theme='dark'] ::-webkit-scrollbar-track) {
		background: #1a1410;
		border-left: 2px solid #3d2a18;
	}

	:global([data-theme='light'] ::-webkit-scrollbar-track) {
		background: #e8dcc8;
		border-left: 2px solid #d08040;
	}

	:global([data-theme='dark'] ::-webkit-scrollbar-thumb) {
		background: linear-gradient(to bottom, #cc6600 0%, #995200 100%);
		border: 2px solid #662d00;
	}

	:global([data-theme='light'] ::-webkit-scrollbar-thumb) {
		background: linear-gradient(to bottom, #f4a460 0%, #d08040 100%);
		border: 2px solid #8b4513;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		filter: brightness(1.2);
	}
</style>
