<script>
	export let data;
	import { navigating } from '$app/stores';
	import { page } from '$app/stores';
</script>

{#if $navigating}
	<div class="loading-overlay">
		<div class="spinner">Loading...</div>
	</div>
{/if}

<slot />

<style>
	.breadcrumbs {
		padding: 10px 20px;
		font-size: 0.9rem;
		transition: background 0.3s ease;
	}

	:global([data-theme='dark']) .breadcrumbs {
		background: #3d2a18;
		color: #ff9933;
	}

	:global([data-theme='light']) .breadcrumbs {
		background: #f4a460;
		color: #654321;
	}

	.separator {
		margin: 0 5px;
	}

	:global([data-theme='dark']) .separator {
		color: #cc6600;
	}

	:global([data-theme='light']) .separator {
		color: #8b4513;
	}

	.current {
		font-weight: bold;
	}

	:global([data-theme='dark']) .current {
		color: #ffb366;
	}

	:global([data-theme='light']) .current {
		color: #3d1f0f;
	}

	.loading-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		transition: background 0.3s ease;
	}

	:global([data-theme='dark']) .loading-overlay {
		background: rgba(0, 0, 0, 0.7);
	}

	:global([data-theme='light']) .loading-overlay {
		background: rgba(139, 69, 19, 0.5);
	}

	.spinner {
		font-size: 1.5rem;
		font-weight: bold;
		font-family: 'Trebuchet MS', sans-serif;
		text-transform: uppercase;
		letter-spacing: 2px;
		padding: 20px 40px;
		border: 2px solid;
		animation: pulse 1.5s ease-in-out infinite;
	}

	:global([data-theme='dark']) .spinner {
		color: #ff9933;
		background: rgba(61, 42, 24, 0.9);
		border-color: #cc6600;
		box-shadow: 0 0 20px rgba(204, 102, 0, 0.5);
	}

	:global([data-theme='light']) .spinner {
		color: #654321;
		background: rgba(244, 164, 96, 0.95);
		border-color: #8b4513;
		box-shadow: 0 0 20px rgba(139, 69, 19, 0.4);
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.7;
			transform: scale(1.05);
		}
	}
</style>
