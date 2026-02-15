<script>
	export let data;

	//pfp preview
	let previewUrl = '';
	let errorMessage = '';

	const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
	const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

	function handleFileSelect(event) {
		errorMessage = '';
		const file = event.target.files[0];

		if (!file) return;

		// Validate file type
		if (!ALLOWED_TYPES.includes(file.type)) {
			errorMessage = 'Only PNG, JPEG, and WebP images are allowed';
			event.target.value = ''; 
			previewUrl = '';
			return;
		}

		// Validate file size
		if (file.size > MAX_FILE_SIZE) {
			errorMessage = 'File size must be less than 5MB';
			event.target.value = '';
			previewUrl = '';
			return;
		}

		previewUrl = URL.createObjectURL(file);
	}
</script>

<div class="profile-container">
	<div class="profile-card">
		<div class="profile-header">
			<div class="profile-title">OPERATIVE PROFILE</div>
			<div class="profile-symbol">λ</div>
			<div class="editbtn">
				<form
					method="POST"
					action="?/upload"
					enctype="multipart/form-data"
				>
					<input class="browseImg"
						type="file"
						on:change={handleFileSelect}
						name="image"
						accept="image/png,image/jpeg,image/jpg,image/webp"
					/>

					{#if errorMessage}
						<div class="error-message">{errorMessage}</div>
					{/if}

					{#if previewUrl}
						<img src={previewUrl} alt="Preview" class="preview-image" />
					{/if}

					<button class="uploadImg" type="submit" disabled={!previewUrl}>
						Upload Image
					</button>
				</form>
			</div>
		</div>

		{#if data.user.profilePicture}
			<div class="profile-picture-holder">
				<img src={data.user.profilePicture.url} alt="Profile picture" class="profile-picture" />
			</div>
			<div class="deletebtn">
				<form
					method="POST"
					action="?/delete"
				>
					<button class="deleteImg" type="submit">Delete Image</button>
				</form>
			</div>
		{:else}
			<div class="profile-picture-holder">
				<img src="/images/profPic.png" alt="default profile picture" class="profile-picture" />
			</div>
		{/if}

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
	.error-message {
		color: #ff5a5a;
		background: rgba(255, 90, 90, 0.1);
		border: 1px solid #ff5a5a;
		padding: 10px;
		margin: 10px 0;
		border-radius: 5px;
		font-size: 0.9em;
	}

	.editbtn {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.editbtn form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
	}

	.editbtn form button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.browseImg {
		padding: 8px 12px;
		border: 2px solid;
		font-family: monospace;
		font-size: 0.9em;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	:global([data-theme='dark']) .browseImg {
		background: rgba(10, 8, 5, 0.7);
		border-color: #8b7355;
		color: #c9b68a;
	}

	:global([data-theme='light']) .browseImg {
		background: rgba(255, 255, 255, 0.5);
		border-color: #8b4513;
		color: #654321;
	}

	.browseImg:hover {
		filter: brightness(1.2);
	}

	.uploadImg {
		padding: 10px 20px;
		border: 2px solid;
		font-family: monospace;
		font-size: 0.9em;
		text-transform: uppercase;
		letter-spacing: 1px;
		cursor: pointer;
		transition: all 0.2s ease;
		font-weight: bold;
	}

	:global([data-theme='dark']) .uploadImg {
		background: linear-gradient(to bottom, #5d4a2e, #3d2e1a);
		border-color: #8b7355;
		color: #c9b68a;
	}

	:global([data-theme='light']) .uploadImg {
		background: linear-gradient(to bottom, #f4a460, #d08040);
		border-color: #8b4513;
		color: #654321;
	}

	:global([data-theme='dark']) .uploadImg:hover:not(:disabled) {
		background: linear-gradient(to bottom, #8b7355, #5d4a2e);
		border-color: #ffd95a;
		color: #ffd95a;
	}

	:global([data-theme='light']) .uploadImg:hover:not(:disabled) {
		background: linear-gradient(to bottom, #ff9933, #f4a460);
		border-color: #cc6600;
		color: #2d1f14;
	}

	.uploadImg:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.deletebtn {
		margin-top: 15px;
		width: 50%;
		display: flex;
		justify-content: center;
	}

	.deletebtn form {
		width: 50%;
		max-width: 150px;
	}

	.deleteImg {
		width: 100%;
		padding: 10px 20px;
		border: 2px solid #ff5a5a;
		font-family: monospace;
		font-size: 0.9em;
		text-transform: uppercase;
		letter-spacing: 1px;
		cursor: pointer;
		transition: all 0.2s ease;
		font-weight: bold;
		color: #fff;
	}

	:global([data-theme='dark']) .deleteImg {
		background: linear-gradient(to bottom, #8b2e2a, #5d1a1a);
	}

	:global([data-theme='light']) .deleteImg {
		background: linear-gradient(to bottom, #cc5500, #994400);
	}

	:global([data-theme='dark']) .deleteImg:hover:not(:disabled) {
		background: linear-gradient(to bottom, #ff5a5a, #8b2e2a);
		border-color: #ffd95a;
	}

	:global([data-theme='light']) .deleteImg:hover:not(:disabled) {
		background: linear-gradient(to bottom, #ff6600, #cc5500);
		border-color: #662d00;
	}

	.deleteImg:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.profile-container {
		max-width: 800px;
		margin: 0 auto;
		width: 100%;
	}

	.preview-image {
		margin-top: 10px;
		max-width: 100px;
		border: 2px solid;
		border-radius: 5px;
	}

	:global([data-theme='dark']) .preview-image {
		border-color: #8b7355;
	}

	:global([data-theme='light']) .preview-image {
		border-color: #8b4513;
	}

	.profile-card {
		padding: 30px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		border: 3px solid;
		transition: all 0.3s ease;
	}

	:global([data-theme='dark']) .profile-card {
		background: linear-gradient(135deg, #2a1a0c, #1c1508);
		border-color: #8b7355;
	}

	:global([data-theme='light']) .profile-card {
		background: linear-gradient(135deg, #f5e6d3, #e8dcc8);
		border-color: #d08040;
	}

	.profile-card::before {
		content: '';
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		bottom: 10px;
		border: 1px solid;
		pointer-events: none;
	}

	:global([data-theme='dark']) .profile-card::before {
		border-color: rgba(139, 115, 85, 0.2);
	}

	:global([data-theme='light']) .profile-card::before {
		border-color: rgba(208, 128, 64, 0.2);
	}

	.profile-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 30px;
		padding-bottom: 15px;
		border-bottom: 2px solid;
	}

	:global([data-theme='dark']) .profile-header {
		border-color: #8b7355;
	}

	:global([data-theme='light']) .profile-header {
		border-color: #d08040;
	}

	.profile-title {
		font-size: 1.5em;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	:global([data-theme='dark']) .profile-title {
		color: #ffd95a;
	}

	:global([data-theme='light']) .profile-title {
		color: #cc6600;
	}

	.profile-symbol {
		font-size: 2em;
		color: #ff5a5a;
	}

	.profile-picture-holder {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 30px auto;
	}

	:global([data-theme='dark']) .profile-picture-holder {
		border-color: #8b7355;
		background: rgba(10, 8, 5, 0.7);
	}

	:global([data-theme='light']) .profile-picture-holder {
		border-color: #d08040;
		background: rgba(255, 255, 255, 0.3);
	}

	.profile-picture {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.profile-content {
		width: 100%;
		margin-bottom: 30px;
	}

	.username-display {
		padding: 20px;
		margin-bottom: 20px;
		border-top: 4px solid;
		border-left: none;
	}

	:global([data-theme='dark']) .username-display {
		background: rgba(10, 8, 5, 0.7);
		border-color: #8b7355;
	}

	:global([data-theme='light']) .username-display {
		background: rgba(255, 255, 255, 0.5);
		border-color: #d08040;
	}

	.username-label {
		display: block;
		font-size: 0.9em;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 5px;
	}

	:global([data-theme='dark']) .username-label {
		color: #8b7355;
	}

	:global([data-theme='light']) .username-label {
		color: #8b4513;
	}

	.username-value {
		display: block;
		font-size: 2em;
		letter-spacing: 1px;
		position: relative;
		padding: 10px 0;
	}

	:global([data-theme='dark']) .username-value {
		color: #ffd95a;
	}

	:global([data-theme='light']) .username-value {
		color: #cc6600;
	}

	.username-value::before {
		content: attr(data-text);
		position: absolute;
		top: 10px;
		left: 0;
		width: 100%;
		color: rgba(255, 90, 90, 0.3);
		z-index: 1;
	}

	.profile-info {
		padding: 20px;
	}

	:global([data-theme='dark']) .profile-info {
		background: rgba(10, 8, 5, 0.7);
	}

	:global([data-theme='light']) .profile-info {
		background: rgba(255, 255, 255, 0.5);
	}

	.info-line {
		display: flex;
		justify-content: space-between;
		padding: 12px 0;
		border-bottom: 1px solid;
	}

	:global([data-theme='dark']) .info-line {
		border-color: rgba(139, 115, 85, 0.2);
	}

	:global([data-theme='light']) .info-line {
		border-color: rgba(208, 128, 64, 0.2);
	}

	.info-line:last-child {
		border-bottom: none;
	}

	.info-label {
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	:global([data-theme='dark']) .info-label {
		color: #8b7355;
	}

	:global([data-theme='light']) .info-label {
		color: #8b4513;
	}

	.info-value {
		letter-spacing: 1px;
	}

	:global([data-theme='dark']) .info-value {
		color: #c9b68a;
	}

	:global([data-theme='light']) .info-value {
		color: #654321;
	}

	.status-active {
		color: #5aff7a;
	}

	.profile-actions {
		display: flex;
		gap: 15px;
		flex-wrap: wrap;
		width: 100%;
	}

	.action-btn {
		flex: 1;
		min-width: 120px;
		border: 2px solid;
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

	:global([data-theme='dark']) .action-btn {
		background: linear-gradient(to bottom, #5d4a2e, #3d2e1a);
		border-color: #8b7355;
		color: #c9b68a;
	}

	:global([data-theme='light']) .action-btn {
		background: linear-gradient(to bottom, #f4a460, #d08040);
		border-color: #8b4513;
		color: #654321;
	}

	:global([data-theme='dark']) .action-btn:hover {
		background: linear-gradient(to bottom, #8b7355, #5d4a2e);
		border-color: #ffd95a;
		color: #ffd95a;
	}

	:global([data-theme='light']) .action-btn:hover {
		background: linear-gradient(to bottom, #ff9933, #f4a460);
		border-color: #cc6600;
		color: #2d1f14;
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
		.profile-card {
			padding: 20px;
		}

		.profile-header {
			flex-direction: column;
			text-align: center;
			gap: 10px;
		}

		.profile-picture-holder {
			width: 180px;
			height: 180px;
			margin: 0 auto 20px auto;
		}

		.username-value {
			font-size: 1.5em;
		}

		.info-line {
			flex-direction: column;
			gap: 5px;
			text-align: center;
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

		.profile-picture-holder {
			width: 150px;
			height: 150px;
		}

		.username-display,
		.profile-info {
			padding: 15px;
		}
	}
</style>