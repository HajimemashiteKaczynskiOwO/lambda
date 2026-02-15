<script>
	export let data;
	// Data från parent + egen data
</script>

<div class="public-layout">
	<header class="public-header">
		<!-- Din public header här -->
	</header>

	<main class="public-main">
		<slot />
	</main>

	<footer class="public-footer">
		<!-- Din public footer här -->
	</footer>
</div>

<style>
	.public-layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.public-header {
		/* Din styling för public header */
	}

	.public-main {
		flex: 1;
		/* Content area styling */
	}

	.public-footer {
		/* Footer styling */
	}
</style>
