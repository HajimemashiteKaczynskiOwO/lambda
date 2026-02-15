<script>
	export let data;
	let selectedPlayer1 = null;
	let selectedPlayer2 = null;

	function handlePlayer1Change(event) {
		const playerId = event.target.value;
		const player = data.players.find((p) => p.id === playerId);
		selectedPlayer1 = player;
	}

	function handlePlayer2Change(event) {
		const playerId = event.target.value;
		const player = data.players.find((p) => p.id === playerId);
		selectedPlayer2 = player;
	}
</script>

<h1 class="title">Play a match</h1>

<form method="POST" action="?/match">
	<!-- Player 1 -->
	<select name="player1Id" required on:change={handlePlayer1Change}>
		<option value="">Select Player 1</option>
		{#each data.players as p}
			<option value={p.id}>{p.username}</option>
		{/each}
	</select>

	{#if selectedPlayer1}
		<input type="hidden" name="player1Name" value={selectedPlayer1.username} />
	{/if}

	<h4>VS</h4>

	<!-- Player 2 -->
	<select name="player2Id" required on:change={handlePlayer2Change}>
		<option value="">Select Player 2</option>
		{#each data.players as p}
			<option value={p.id}>{p.username}</option>
		{/each}
	</select>

	{#if selectedPlayer2}
		<input type="hidden" name="player2Name" value={selectedPlayer2.username} />
	{/if}

	<h3>Who won?</h3>

	<label>
		<input type="radio" name="winner" value="player1" required />
		<span>Player 1</span>
	</label>

	<label>
		<input type="radio" name="winner" value="player2" required />
		<span>Player 2</span>
	</label>

	<br /><br />
	<button class="play">Play matcha</button>
</form>

<style>
	/* Basic Half-Life 2 inspired styling without custom fonts */
	:global(body) {
		background: #1a0f05;
		margin: 0;
		padding: 20px;
		font-family: monospace;
		color: #c9b68a;
	}

	.title {
		color: #ffd95a;
		text-shadow: 2px 2px 0 #5d4a2e;
		text-align: center;
		font-size: 2.5rem;
		letter-spacing: 2px;
		text-transform: uppercase;
		margin-bottom: 30px;
		padding: 20px;
		background: linear-gradient(135deg, rgba(45, 35, 20, 0.9), rgba(28, 21, 8, 0.9));
		border: 4px solid;
		border-image: linear-gradient(45deg, #8b7355, #5d4a2e, #3d2e1a, #5d4a2e) 1;
		position: relative;
	}

	.title::after {
		content: 'λ';
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		color: rgba(255, 90, 90, 0.3);
		font-size: 2em;
	}

	form {
		background: linear-gradient(135deg, rgba(45, 35, 20, 0.9), rgba(28, 21, 8, 0.9));
		border: 4px solid;
		border-image: linear-gradient(45deg, #8b7355, #5d4a2e, #3d2e1a, #5d4a2e) 1;
		padding: 30px;
		max-width: 600px;
		margin: 0 auto;
		position: relative;
		box-shadow:
			inset 0 0 40px rgba(0, 0, 0, 0.7),
			0 10px 30px rgba(0, 0, 0, 0.5);
	}

	form::before {
		content: '';
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		bottom: 10px;
		border: 1px solid rgba(139, 115, 85, 0.2);
		pointer-events: none;
	}

	select {
		width: 100%;
		background: rgba(10, 8, 5, 0.8);
		border: 3px solid #5d4a2e;
		border-top-color: #8b7355;
		border-left-color: #8b7355;
		color: #c9b68a;
		padding: 15px;
		font-family: monospace;
		font-size: 1.1em;
		margin: 10px 0 25px 0;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%238b7355' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 15px center;
		background-size: 12px;
		position: relative;
		transition: all 0.3s ease;
	}

	select:focus {
		outline: none;
		border-color: #c9b68a;
		box-shadow: 0 0 15px rgba(201, 182, 138, 0.3);
		background-color: rgba(20, 16, 10, 0.9);
	}

	option {
		background: #2a1a0c;
		color: #c9b68a;
		padding: 10px;
	}

	h4 {
		color: #ff5a5a;
		text-align: center;
		font-size: 2rem;
		text-shadow: 0 0 10px rgba(255, 90, 90, 0.5);
		margin: 20px 0;
		padding: 10px;
		background: rgba(139, 46, 42, 0.1);
		border: 2px solid #8b2e2a;
		position: relative;
	}

	h3 {
		color: #ffd95a;
		text-shadow: 1px 1px 0 #5d4a2e;
		font-size: 1.5rem;
		margin: 30px 0 20px 0;
		padding: 15px;
		background: rgba(10, 8, 5, 0.5);
		border-left: 4px solid #8b7355;
		border-right: 4px solid #8b7355;
		text-align: center;
	}

	label {
		display: inline-block;
		margin: 10px 20px;
		padding: 15px 25px;
		background: rgba(10, 8, 5, 0.5);
		border: 2px solid #5d4a2e;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	label:hover {
		border-color: #8b7355;
		background: rgba(45, 35, 20, 0.8);
	}

	input[type='radio'] {
		display: none;
	}

	input[type='radio']:checked + *::before {
		content: '▶';
		position: absolute;
		left: 10px;
		color: #5aff7a;
		font-size: 0.9em;
	}

	label::after {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(201, 182, 138, 0.1), transparent);
		transform: translateX(-100%);
		transition: transform 0.5s ease;
	}

	label:hover::after {
		transform: translateX(100%);
	}

	label span {
		color: #c9b68a;
		font-family: monospace;
		font-size: 1.1em;
		letter-spacing: 1px;
	}

	input[type='radio']:checked ~ span {
		color: #ffd95a;
		font-weight: bold;
	}

	.play {
		display: block;
		width: 100%;
		background: linear-gradient(45deg, #5d4a2e, #3d2e1a);
		border: 4px solid #8b7355;
		border-top-color: #c9b68a;
		border-left-color: #c9b68a;
		color: #c9b68a;
		padding: 20px;
		font-family: monospace;
		font-size: 1.2em;
		font-weight: bold;
		letter-spacing: 2px;
		text-transform: uppercase;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease;
		margin-top: 20px;
	}

	.play:hover {
		background: linear-gradient(45deg, #8b7355, #5d4a2e);
		border-color: #ff5a5a;
		color: #ff5a5a;
		box-shadow: 0 0 25px rgba(255, 90, 90, 0.4);
	}

	.play:active {
		transform: translateY(2px);
	}

	.play::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 90, 90, 0.2), transparent);
		transition: left 0.5s ease;
	}

	.play:hover::after {
		left: 100%;
	}

	input[type='hidden'] {
		display: none;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.title {
			font-size: 2rem;
			padding: 15px;
		}

		form {
			padding: 20px;
		}

		h4 {
			font-size: 1.5rem;
		}

		label {
			display: block;
			margin: 10px 0;
		}

		select {
			font-size: 1em;
			padding: 12px;
		}
	}
</style>
