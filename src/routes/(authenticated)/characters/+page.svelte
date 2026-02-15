<script>
	export let data;
	const { players } = data;
</script>

{#each players as plr}
	<div class="player-card">
		<a href="/characters/{plr.id}" class="player-link"> <h3><strong>{plr.username}</strong></h3></a>
		<br />
		<div class="player-id">
			<button on:click={() => navigator.clipboard.writeText(plr.id)}>Copy ID</button>
		</div>
		<div class="player-stats-summary">
			{plr.matches} matches played <br />
			{plr.wins} wins <br />
			{plr.losses} losses <br />
		</div>
		<h4 class="win-rate">Win rate: {(plr.wins / plr.matches).toFixed(2)}</h4>
	</div>
{/each}

<style>
	:global(body) {
		background: #1a0f05;
		margin: 0;
		padding: 20px;
		font-family: monospace;
		color: #c9b68a;
	}

	.player-card {
		background: linear-gradient(135deg, rgba(45, 35, 20, 0.9), rgba(28, 21, 8, 0.9));
		border: 4px solid;
		border-image: linear-gradient(45deg, #8b7355, #5d4a2e, #3d2e1a, #5d4a2e) 1;
		padding: 25px;
		margin-bottom: 20px;
		position: relative;
		box-shadow:
			inset 0 0 30px rgba(0, 0, 0, 0.7),
			0 5px 15px rgba(0, 0, 0, 0.5);
	}

	.player-card::before {
		content: '';
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		bottom: 10px;
		border: 1px solid rgba(139, 115, 85, 0.2);
		pointer-events: none;
	}

	.player-link {
		text-decoration: none;
		display: block;
		margin-bottom: 15px;
	}

	.player-link h3 {
		margin: 0;
		color: #ffd95a;
		font-size: 1.8rem;
		text-shadow: 2px 2px 0 #5d4a2e;
		letter-spacing: 2px;
		text-transform: uppercase;
		padding: 10px;
		background: rgba(10, 8, 5, 0.5);
		border-left: 4px solid #8b7355;
		transition: all 0.3s ease;
	}

	.player-link:hover h3 {
		color: #c9b68a;
		background: rgba(10, 8, 5, 0.8);
		border-left-color: #ffd95a;
	}

	.player-id {
		margin: 15px 0;
		padding: 10px;
		background: rgba(10, 8, 5, 0.5);
		border-top: 2px solid #8b7355;
		border-bottom: 2px solid #8b7355;
	}

	.player-id button {
		background: linear-gradient(to bottom, #5d4a2e, #3d2e1a);
		border: 2px solid #8b7355;
		color: #c9b68a;
		padding: 8px 20px;
		cursor: pointer;
		font-family: monospace;
		font-size: 0.9em;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.player-id button:hover {
		background: linear-gradient(to bottom, #8b7355, #5d4a2e);
		border-color: #5aff7a;
		color: #5aff7a;
	}

	.player-id button::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(90, 255, 122, 0.2), transparent);
		transition: left 0.5s ease;
	}

	.player-id button:hover::after {
		left: 100%;
	}

	.player-stats-summary {
		padding: 15px;
		margin: 15px 0;
		background: rgba(10, 8, 5, 0.5);
		border-left: 3px solid #8b7355;
		color: #c9b68a;
		line-height: 1.6;
	}

	.player-stats-summary br {
		display: block;
		margin: 5px 0;
	}

	.win-rate {
		color: #ffd95a;
		text-shadow: 1px 1px 0 #5d4a2e;
		font-size: 1.3rem;
		padding: 12px;
		background: linear-gradient(
			90deg,
			rgba(139, 115, 85, 0.1),
			rgba(10, 8, 5, 0.5),
			rgba(139, 115, 85, 0.1)
		);
		border-top: 2px solid #8b7355;
		border-bottom: 2px solid #8b7355;
		margin: 15px 0 0 0;
		text-align: center;
	}

	.player-card::after {
		content: 'ИГРОК';
		position: absolute;
		top: 15px;
		right: 15px;
		color: rgba(139, 115, 85, 0.3);
		font-size: 0.8em;
		letter-spacing: 1px;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.player-card {
			padding: 15px;
		}

		.player-link h3 {
			font-size: 1.4rem;
		}

		.win-rate {
			font-size: 1.1rem;
		}
	}
</style>
