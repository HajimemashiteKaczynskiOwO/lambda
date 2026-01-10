<script>
	export let data;
	const { player, matches } = data;
	const winratePercentage = player ? (player.wins / player.matches).toFixed(2) : 0;
</script>

<div class="player-stats">
	{#if player}
	<div class="profilepic-holder">
		{#if player.profilePicture?.url}
  <img src={player.profilePicture.url} alt="Profile Picture" class="profilepic" />
{:else}
  <img src="/images/profPic.png" alt="Default Profile Picture" class="profilepic" />
{/if}
	</div>
		<h1 class="bigName">{player.username}</h1>

		<div class="stats-grid">
			<div class="stat-card">
				<h3>Wins</h3>
				<p class="stat-value">{player.wins}</p>
			</div>

			<div class="stat-card">
				<h3>Losses</h3>
				<p class="stat-value">{player.losses}</p>
			</div>

			<div class="stat-card">
				<h3>Matches</h3>
				<p class="stat-value">{player.matches}</p>
			</div>

			<div class="stat-card">
				<h3>Win Rate</h3>
				<p class="stat-value">{winratePercentage}%</p>
			</div>
		</div>

		<div class="player-info">
			<p><strong>Created:</strong> {new Date(player.createdAt).toLocaleDateString()}</p>
			<p><strong>Last Updated:</strong> {new Date(player.updatedAt).toLocaleDateString()}</p>
		</div>

		{#if player.matches && player.matches > 0}
			<h2>Match History</h2>
			<div class="matches-list">
				{#each matches as mtc}
					<div class="match-item">
						<h2>Match played: {mtc.createdAt}</h2>

						Match ID: {mtc.id}
						<button on:click={() => navigator.clipboard.writeText(mtc.id)}>Copy ID</button>
						<br />

						<h3>Player 1:</h3>
						<a class="id-link" href="/characters/{mtc.player1Id}">
							{mtc.player1Name}
						</a><br />
						ID: {mtc.player1Id}<button on:click={() => navigator.clipboard.writeText(mtc.player1Id)}
							>Copy ID</button
						>
						<br />

						<h3>Player 2:</h3>
						<a class="id-link" href="/characters/{mtc.player2Id}">
							{mtc.player2Name}
						</a><br />
						ID: {mtc.player2Id}<button on:click={() => navigator.clipboard.writeText(mtc.player2Id)}
							>Copy ID</button
						>
						<br />

						<h3>Winner:</h3>
						<a class="id-link" href="/characters/{mtc.winnerId}">
							{mtc.winnerName}
						</a><br />
						ID: {mtc.winnerId}<button on:click={() => navigator.clipboard.writeText(mtc.winnerId)}
							>Copy ID</button
						>
						<br />
					</div>
				{/each}
			</div>
		{:else}
			<p>No matches played yet.</p>
		{/if}
	{:else}
		<h1>Player Not Found</h1>
		<p>The requested player could not be found.</p>
	{/if}
</div>

<style>
	:global(body) {
		background: #1a0f05;
		margin: 0;
		padding: 20px;
		font-family: monospace;
		color: #c9b68a;
	}

	.profilepic-holder {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid #8b7355;
		position: relative;
		background: rgba(10, 8, 5, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 30px auto;
	}
	.profilepic {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.player-stats {
		padding: 20px;
		max-width: 1200px;
		margin: 0 auto;
		background: #2a1a0c;
		border: 4px solid #8b7355;
		box-shadow: 0 0 20px rgba(139, 115, 85, 0.3);
		position: relative;
	}

	.player-stats::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, transparent, #8b7355, #c9b68a, #8b7355, transparent);
	}

	.bigName {
		font-size: 3rem;
		text-align: center;
		margin-bottom: 1rem;
		color: #ffd95a;
		text-shadow: 2px 2px 0 #5d4a2e;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.stat-card {
		background: linear-gradient(135deg, #3d2e1a, #2a1a0c);
		border: 3px solid #8b7355;
		border-top-color: #c9b68a;
		border-left-color: #c9b68a;
		padding: 1.5rem;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.stat-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238b7355' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
		opacity: 0.5;
		pointer-events: none;
	}

	.stat-card h3 {
		margin: 0 0 0.5rem 0;
		color: #8b7355;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.stat-value {
		margin: 0;
		font-size: 2.5rem;
		font-weight: bold;
		color: #c9b68a;
		text-shadow: 0 0 5px rgba(201, 182, 138, 0.5);
	}

	.player-info {
		background: rgba(10, 8, 5, 0.7);
		padding: 1.5rem;
		border-radius: 0;
		margin: 2rem 0;
		border-left: 4px solid #8b7355;
		border-right: 4px solid #8b7355;
	}

	.player-info p {
		margin: 0.5rem 0;
		color: #c9b68a;
	}

	.player-info strong {
		color: #8b7355;
	}

	h2 {
		color: #ffd95a;
		text-shadow: 1px 1px 0 #5d4a2e;
		border-bottom: 2px solid #8b7355;
		padding-bottom: 10px;
		margin-top: 2rem;
	}

	.matches-list {
		margin-top: 2rem;
	}

	.match-item {
		background: linear-gradient(135deg, rgba(45, 35, 20, 0.8), rgba(28, 21, 8, 0.8));
		border: 3px solid #5d4a2e;
		border-top-color: #8b7355;
		border-left-color: #8b7355;
		padding: 1.5rem;
		margin-bottom: 1rem;
		position: relative;
	}

	.match-item::before {
		content: 'СОБЫТИЕ';
		position: absolute;
		top: 10px;
		right: 10px;
		color: #8b7355;
		font-size: 0.8em;
		letter-spacing: 1px;
	}

	.match-item h2 {
		color: #c9b68a;
		font-size: 1.2rem;
		margin-top: 0;
		border-bottom: none;
		padding-bottom: 0;
	}

	.match-item h3 {
		color: #8b7355;
		margin: 10px 0 5px 0;
		font-size: 1rem;
	}

	.id-link {
		color: #ffd95a;
		text-decoration: none;
		padding: 2px 5px;
		background: rgba(10, 8, 5, 0.5);
		transition: all 0.3s ease;
	}

	.id-link:hover {
		color: #ff5a5a;
		background: rgba(10, 8, 5, 0.8);
	}

	button {
		background: linear-gradient(to bottom, #5d4a2e, #3d2e1a);
		border: 2px solid #8b7355;
		color: #c9b68a;
		padding: 5px 15px;
		margin-left: 10px;
		cursor: pointer;
		font-family: monospace;
		font-size: 0.9em;
		transition: all 0.3s ease;
	}

	button:hover {
		background: linear-gradient(to bottom, #8b7355, #5d4a2e);
		border-color: #c9b68a;
		color: #ffd95a;
	}

	p {
		color: #8b7355;
		padding: 15px;
		background: rgba(10, 8, 5, 0.5);
		border-left: 3px solid #8b7355;
	}

	h1 {
		color: #ff5a5a;
		text-align: center;
		text-shadow: 1px 1px 0 #5d4a2e;
		padding: 20px;
		background: rgba(139, 46, 42, 0.1);
		border: 2px solid #8b2e2a;
	}

	@media (max-width: 768px) {
		.stats-grid {
			grid-template-columns: 1fr 1fr;
		}

		.player-stats {
			padding: 15px;
		}

		.bigName {
			font-size: 2rem;
		}

		.stat-value {
			font-size: 2rem;
		}
	}
</style>
