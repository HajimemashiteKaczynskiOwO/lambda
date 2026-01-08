<script>
	export let data;
</script>

<div class="profile-container">
	<div class="profile-card">
		<div class="profile-header">
			<div class="profile-title">OPERATIVE PROFILE</div>
			<div class="profile-symbol">λ</div>
		</div>

		<div class="profile-content">
			<div class="username-display">
				<span class="username-label">IDENTIFICATION:</span>
				<span class="username-value" data-text={data.user.username}>
					{data.user.username}
				</span>
			</div>

			<div class="profile-info">
				<div class="info-line">
					<span class="info-label">MATCHES PLAYED:</span>
					<span class="info-value">{data.user.matches}</span>
				</div>

				<div class="info-line">
					<span class="info-label">WINS:</span>
					<span class="info-value">{data.user.wins}</span>
				</div>

				<div class="info-line">
					<span class="info-label">LAST ACTIVITY:</span>
					<span class="info-value status-active">{data.user.updatedAt}</span>
				</div>
			</div>
		</div>

		<div class="profile-actions">
			<a href="/characters" class="action-btn">OPERATIVES</a>
			<a href="/games" class="action-btn">MATCHES</a>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: #1a0f05;
		margin: 0;
		padding: 20px;
		font-family: monospace;
		color: #c9b68a;
		min-height: 100vh;
	}

	.profile-container {
		max-width: 800px;
		margin: 0 auto;
		width: 100%;
	}

	.profile-card {
		background: linear-gradient(135deg, #2a1a0c, #1c1508);
		border: 3px solid #8b7355;
		padding: 30px;
		position: relative;
	}

	.profile-card::before {
		content: '';
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		bottom: 10px;
		border: 1px solid rgba(139, 115, 85, 0.2);
		pointer-events: none;
	}

	.profile-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
		padding-bottom: 15px;
		border-bottom: 2px solid #8b7355;
	}

	.profile-title {
		font-size: 1.5em;
		color: #ffd95a;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.profile-symbol {
		font-size: 2em;
		color: #ff5a5a;
	}

	.profile-content {
		margin-bottom: 30px;
	}

	.username-display {
		background: rgba(10, 8, 5, 0.7);
		padding: 20px;
		margin-bottom: 20px;
		border-left: 4px solid #8b7355;
	}

	.username-label {
		display: block;
		color: #8b7355;
		font-size: 0.9em;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 5px;
	}

	.username-value {
		display: block;
		font-size: 2em;
		color: #ffd95a;
		letter-spacing: 1px;
		position: relative;
		padding: 10px 0;
	}

	.username-value::before {
		content: attr(data-text);
		position: absolute;
		top: 10px;
		left: 0;
		color: rgba(255, 90, 90, 0.3);
		z-index: 1;
	}

	.profile-info {
		background: rgba(10, 8, 5, 0.7);
		padding: 20px;
	}

	.info-line {
		display: flex;
		justify-content: space-between;
		padding: 12px 0;
		border-bottom: 1px solid rgba(139, 115, 85, 0.2);
	}

	.info-line:last-child {
		border-bottom: none;
	}

	.info-label {
		color: #8b7355;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.info-value {
		color: #c9b68a;
		letter-spacing: 1px;
	}

	.status-active {
		color: #5aff7a;
	}

	.profile-actions {
		display: flex;
		gap: 15px;
		flex-wrap: wrap;
	}

	.action-btn {
		flex: 1;
		min-width: 120px;
		background: linear-gradient(to bottom, #5d4a2e, #3d2e1a);
		border: 2px solid #8b7355;
		color: #c9b68a;
		padding: 15px;
		text-decoration: none;
		text-align: center;
		font-family: monospace;
		font-size: 0.9em;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.action-btn:hover {
		background: linear-gradient(to bottom, #8b7355, #5d4a2e);
		border-color: #ffd95a;
		color: #ffd95a;
	}

	.action-btn.logout {
		background: linear-gradient(to bottom, #8b2e2a, #5d1a1a);
		border-color: #ff5a5a;
	}

	.action-btn.logout:hover {
		background: linear-gradient(to bottom, #ff5a5a, #8b2e2a);
		border-color: #ffd95a;
	}

	.action-btn::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 217, 90, 0.1), transparent);
		transition: left 0.5s ease;
	}

	.action-btn:hover::after {
		left: 100%;
	}

	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		:global(body) {
			padding: 10px;
		}

		.profile-card {
			padding: 20px;
		}

		.profile-header {
			flex-direction: column;
			text-align: center;
			gap: 10px;
		}

		.username-value {
			font-size: 1.5em;
		}

		.info-line {
			flex-direction: column;
			gap: 5px;
		}

		.profile-actions {
			flex-direction: column;
		}

		.action-btn {
			min-width: 100%;
		}
	}

	@media (max-width: 480px) {
		.profile-title {
			font-size: 1.2em;
		}

		.username-display,
		.profile-info {
			padding: 15px;
		}
	}
</style>