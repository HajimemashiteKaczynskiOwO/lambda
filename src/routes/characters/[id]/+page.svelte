<script>
  export let data;
  
  // Destructure player from data
  const { player, matches } = data;
  
  // Calculate winrate percentage for display
  const winratePercentage = player ? (player.wins / player.matches).toFixed(2) : 0;

  //copytext
  function copyText(text) {
    navigator.clipboard.writeText(text);
  }
</script>

<div class="terminal-container">
  <div class="console-header">
    <div class="console-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <div class="console-title">OPERATIVE DOSSIER v2.7</div>
    <div class="cyrillic-label">ДОСЬЕ ОПЕРАТИВНИКА</div>
  </div>

  <main class="main-frame">
    <div class="scan-line"></div>
    
    <div class="navigation">
      <a href="/characters" class="rusty-link">
        <span class="link-arrow">◄</span>
        <span class="link-text">RETURN TO DATABASE</span>
        <span class="link-cyrillic">ВЕРНУТЬСЯ</span>
        <span class="link-glow"></span>
      </a>
    </div>

    {#if player}
      <div class="operative-header">
        <div class="operative-title">
          <h1 class="glitch-text" data-text="OPERATIVE {player.username.toUpperCase()}">OPERATIVE {player.username.toUpperCase()}</h1>
          <div class="operative-id">ID: {player.id.toString().padStart(4, '0')}</div>
        </div>
        <div class="status-indicator">
          <div class="status-light {player.wins > player.losses ? 'dominant' : 'active'}"></div>
          <span class="status-label">{player.wins > player.losses ? 'DOMINANT' : 'ACTIVE'}</span>
        </div>
      </div>

      <div class="combat-stats">
        <div class="stats-grid">
          <div class="stat-card major">
            <div class="stat-header">
              <span class="stat-label">ENGAGEMENTS</span>
              <span class="stat-cyrillic">БОЁВ</span>
            </div>
            <div class="stat-value">{player.matches}</div>
            <div class="stat-progress">
              <div class="progress-fill" style="width: 100%"></div>
            </div>
          </div>
          
          <div class="stat-card victory">
            <div class="stat-header">
              <span class="stat-label">VICTORIES</span>
              <span class="stat-cyrillic">ПОБЕДЫ</span>
            </div>
            <div class="stat-value">{player.wins}</div>
            <div class="stat-progress">
              <div class="progress-fill" style="width: {player.matches > 0 ? (player.wins / player.matches * 100) : 0}%"></div>
            </div>
          </div>
          
          <div class="stat-card defeat">
            <div class="stat-header">
              <span class="stat-label">DEFEATS</span>
              <span class="stat-cyrillic">ПОРАЖЕНИЯ</span>
            </div>
            <div class="stat-value">{player.losses}</div>
            <div class="stat-progress">
              <div class="progress-fill" style="width: {player.matches > 0 ? (player.losses / player.matches * 100) : 0}%"></div>
            </div>
          </div>
          
          <div class="stat-card efficiency">
            <div class="stat-header">
              <span class="stat-label">EFFECTIVENESS</span>
              <span class="stat-cyrillic">ЭФФЕКТИВНОСТЬ</span>
            </div>
            <div class="stat-value">{winratePercentage}%</div>
            <div class="stat-progress">
              <div class="progress-fill" style="width: {winratePercentage}%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="operative-info">
        <div class="info-panel">
          <div class="panel-header">
            <div class="panel-title">
              <span class="panel-icon">⏱</span>
              <span class="panel-label">OPERATIVE TIMELINE</span>
            </div>
            <span class="panel-cyrillic">ХРОНОЛОГИЯ</span>
          </div>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">ACTIVATION DATE</div>
              <div class="info-value">{new Date(player.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
              <div class="info-cyrillic">АКТИВАЦИЯ</div>
            </div>
            <div class="info-item">
              <div class="info-label">LAST UPDATE</div>
              <div class="info-value">{new Date(player.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
              <div class="info-cyrillic">ОБНОВЛЕНО</div>
            </div>
          </div>
        </div>
      </div>

      {#if player.matches && player.matches > 0}
        <div class="combat-history">
          <div class="section-header">
            <h2 class="glitch-text" data-text="ENGAGEMENT ARCHIVES">ENGAGEMENT ARCHIVES</h2>
            <div class="section-subtitle">
              <span class="cyrillic-subtitle">АРХИВЫ БОЁВ</span>
              <div class="pulse-dot"></div>
            </div>
          </div>
          
          <div class="matches-grid">
            {#each matches as mtc}
              <div class="match-card">
                <div class="match-header">
                  <div class="match-id">
                    <span class="match-label">LOG ENTRY</span>
                    <span class="match-number">#{mtc.id.toString().padStart(6, '0')}</span>
                  </div>
                  <button on:click={() => copyText(mtc.id)} class="copy-button">
                    <span class="copy-icon">⎘</span>
                    <span class="copy-text">COPY ID</span>
                    <div class="copy-glow"></div>
                  </button>
                </div>
                
                <div class="match-timestamp">
                  <div class="timestamp-label">ENGAGEMENT TIME</div>
                  <div class="timestamp-value">{new Date(mtc.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</div>
                </div>
                
                <div class="combatants">
                  <div class="combatant-row">
                    <div class="combatant-label">COMBATANT ALPHA</div>
                    <a href="/characters/{mtc.player1Id}" class="combatant-link">
                      <span class="combatant-name">{mtc.player1Name}</span>
                      <span class="combatant-arrow">►</span>
                    </a>
                  </div>
                  
                  <div class="vs-divider">
                    <div class="vs-line"></div>
                    <div class="vs-text">VS</div>
                    <div class="vs-line"></div>
                  </div>
                  
                  <div class="combatant-row">
                    <div class="combatant-label">COMBATANT BETA</div>
                    <a href="/characters/{mtc.player2Id}" class="combatant-link">
                      <span class="combatant-name">{mtc.player2Name}</span>
                      <span class="combatant-arrow">►</span>
                    </a>
                  </div>
                </div>
                
                <div class="victor-panel">
                  <div class="victor-header">
                    <div class="victor-icon">🏆</div>
                    <div class="victor-label">ENGAGEMENT RESULT</div>
                  </div>
                  <div class="victor-info">
                    <div class="victor-text">VICTOR DECLARED:</div>
                    <a href="/characters/{mtc.winnerId}" class="victor-link">
                      <span class="victor-name">{mtc.winnerName}</span>
                      <span class="victor-arrow">►</span>
                    </a>
                    <div class="victor-cyrillic">ПОБЕДИТЕЛЬ</div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <div class="no-matches">
          <div class="empty-state">
            <div class="empty-icon">⚔</div>
            <div class="empty-title">NO ENGAGEMENTS RECORDED</div>
            <div class="empty-subtitle">This operative has not participated in any combat simulations.</div>
            <div class="empty-cyrillic">НЕТ БОЕВЫХ СИМУЛЯЦИЙ</div>
          </div>
        </div>
      {/if}
    {:else}
      <div class="error-state">
        <div class="error-icon">⚠</div>
        <div class="error-title">OPERATIVE NOT FOUND</div>
        <div class="error-subtitle">The requested combatant dossier could not be located in the database.</div>
        <div class="error-cyrillic">ОПЕРАТИВНИК НЕ НАЙДЕН</div>
      </div>
    {/if}
  </main>

  <div class="terminal-footer">
    <div class="status-bar">
      <span class="status-text">DOSSIER STATUS: {player ? 'ACTIVE' : 'ERROR'}</span>
      <span class="status-light {player ? 'active' : 'error'}"></span>
      <span class="status-text">ENGAGEMENTS: {player ? player.matches : 0} RECORDED</span>
      <span class="status-light {player ? 'active' : 'error'}"></span>
      <span class="status-text">LAST ACCESS: REAL-TIME</span>
    </div>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700&display=swap');

  :global(body) {
    margin: 0;
    padding: 20px;
    background: 
      radial-gradient(circle at 20% 50%, #2a1a0c 0%, #1a0f05 70%),
      linear-gradient(45deg, #0c0c0c 25%, transparent 25%),
      linear-gradient(-45deg, #0c0c0c 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #0c0c0c 75%),
      linear-gradient(-45deg, transparent 75%, #0c0c0c 75%);
    background-size: 100% 100%, 40px 40px, 40px 40px, 40px 40px, 40px 40px;
    background-position: 0 0, 0 0, 20px 0, 20px -20px, 0px 20px;
    min-height: 100vh;
    font-family: 'Share Tech Mono', monospace;
    color: #c9b68a;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .terminal-container {
    width: 100%;
    max-width: 1200px;
    background: 
      linear-gradient(135deg, 
        #2a2318 0%, 
        #1c1508 25%,
        #2a2318 50%,
        #1c1508 75%,
        #2a2318 100%
      );
    border: 8px solid #3d2e1a;
    border-image: 
      linear-gradient(
        45deg,
        #8b7355,
        #5d4a2e,
        #8b7355,
        #5d4a2e
      ) 1;
    box-shadow: 
      0 0 40px rgba(139, 115, 85, 0.3),
      inset 0 0 40px rgba(0, 0, 0, 0.5),
      0 0 0 2px #1a0f05;
    position: relative;
    overflow: hidden;
  }

  .console-header {
    background: linear-gradient(to bottom, #3d2e1a, #2a1a0c);
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #8b7355;
    position: relative;
  }

  .console-dots {
    display: flex;
    gap: 8px;
  }

  .dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.3);
  }

  .red { background: #ff5a5a; }
  .yellow { background: #ffd95a; }
  .green { background: #5aff7a; }

  .console-title {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    font-size: 1.2em;
    color: #c9b68a;
    text-shadow: 0 0 5px rgba(201, 182, 138, 0.5);
    letter-spacing: 2px;
  }

  .cyrillic-label {
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .main-frame {
    padding: 30px;
    position: relative;
    overflow: hidden;
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(139, 115, 85, 0.6) 50%,
      transparent 100%
    );
    animation: scan 4s linear infinite;
    z-index: 1;
  }

  @keyframes scan {
    0% { top: 0; }
    100% { top: 100%; }
  }

  .navigation {
    margin-bottom: 30px;
  }

  .rusty-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(45deg, #3d2e1a, #2a1a0c);
    border: 2px solid #8b7355;
    padding: 12px 20px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .rusty-link:hover {
    border-color: #c9b68a;
    box-shadow: 0 0 20px rgba(201, 182, 138, 0.3);
  }

  .link-arrow {
    color: #8b7355;
    font-size: 1.2em;
  }

  .link-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .link-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
    margin-left: auto;
  }

  .link-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent,
      rgba(201, 182, 138, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  .rusty-link:hover .link-glow {
    left: 100%;
  }

  .operative-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid rgba(139, 115, 85, 0.3);
  }

  .operative-title {
    flex: 1;
  }

  .glitch-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.5em;
    color: #c9b68a;
    text-shadow: 
      2px 2px 0 #8b7355,
      -1px -1px 0 #5d4a2e,
      0 0 10px rgba(201, 182, 138, 0.3);
    margin-bottom: 10px;
    letter-spacing: 3px;
    position: relative;
  }

  .glitch-text::before {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -2px 0 #ff5a5a;
    clip: rect(24px, 550px, 90px, 0);
    animation: glitch 5s infinite linear alternate-reverse;
  }

  @keyframes glitch {
    0% { clip: rect(42px, 9999px, 44px, 0) }
    5% { clip: rect(12px, 9999px, 59px, 0) }
    10% { clip: rect(48px, 9999px, 29px, 0) }
    15% { clip: rect(42px, 9999px, 73px, 0) }
    20% { clip: rect(63px, 9999px, 27px, 0) }
    100% { clip: rect(90px, 9999px, 98px, 0) }
  }

  .operative-id {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .status-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .status-light {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.3);
  }

  .status-light.dominant {
    background: #5aff7a;
    box-shadow: 0 0 15px #5aff7a;
    animation: pulse 2s infinite;
  }

  .status-light.active {
    background: #ffd95a;
    box-shadow: 0 0 15px #ffd95a;
    animation: pulse 2s infinite;
  }

  .status-light.error {
    background: #ff5a5a;
    box-shadow: 0 0 15px #ff5a5a;
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }

  .status-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .combat-stats {
    margin-bottom: 40px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
  }

  .stat-card {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.9) 0%,
        rgba(28, 21, 8, 0.9) 100%
      ),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238b7355' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    border: 3px solid;
    padding: 25px;
    position: relative;
    overflow: hidden;
  }

  .stat-card.major {
    border-color: #8b7355;
  }

  .stat-card.victory {
    border-color: #5aff7a;
  }

  .stat-card.defeat {
    border-color: #ff5a5a;
  }

  .stat-card.efficiency {
    border-color: #ffd95a;
  }

  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .stat-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .stat-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .stat-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 3em;
    color: #c9b68a;
    text-shadow: 0 0 10px rgba(201, 182, 138, 0.5);
    margin-bottom: 15px;
    text-align: center;
  }

  .stat-card.victory .stat-value {
    color: #5aff7a;
    text-shadow: 0 0 10px rgba(90, 255, 122, 0.5);
  }

  .stat-card.defeat .stat-value {
    color: #ff5a5a;
    text-shadow: 0 0 10px rgba(255, 90, 90, 0.5);
  }

  .stat-card.efficiency .stat-value {
    color: #ffd95a;
    text-shadow: 0 0 10px rgba(255, 217, 90, 0.5);
  }

  .stat-progress {
    height: 6px;
    background: rgba(93, 74, 46, 0.3);
    position: relative;
    overflow: hidden;
  }

  .progress-fill {
    position: absolute;
    height: 100%;
    transition: width 1s ease;
  }

  .stat-card.major .progress-fill {
    background: linear-gradient(90deg, #8b7355, #c9b68a);
  }

  .stat-card.victory .progress-fill {
    background: linear-gradient(90deg, #5aff7a, #8bffa5);
  }

  .stat-card.defeat .progress-fill {
    background: linear-gradient(90deg, #ff5a5a, #ff8a8a);
  }

  .stat-card.efficiency .progress-fill {
    background: linear-gradient(90deg, #ffd95a, #fff38a);
  }

  .operative-info {
    margin-bottom: 40px;
  }

  .info-panel {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.8) 0%,
        rgba(28, 21, 8, 0.8) 100%
      );
    border: 3px solid #8b7355;
    padding: 25px;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(139, 115, 85, 0.3);
  }

  .panel-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .panel-icon {
    color: #8b7355;
    font-size: 1.2em;
  }

  .panel-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1em;
    color: #c9b68a;
    letter-spacing: 2px;
  }

  .panel-cyrillic {
    font-size: 0.9em;
    color: #8b7355;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .info-item {
    padding: 15px;
    background: rgba(10, 8, 5, 0.5);
    border-left: 3px solid #8b7355;
  }

  .info-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .info-value {
    font-size: 1.1em;
    color: #c9b68a;
    margin-bottom: 5px;
  }

  .info-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
  }

  .combat-history {
    margin-top: 40px;
  }

  .section-header {
    margin-bottom: 30px;
    text-align: center;
  }

  .cyrillic-subtitle {
    font-size: 1.1em;
    color: #8b7355;
    letter-spacing: 2px;
    margin-top: 10px;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #5aff7a;
    box-shadow: 0 0 10px #5aff7a;
    animation: pulse 2s infinite;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  .matches-grid {
    display: grid;
    gap: 25px;
  }

  .match-card {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.9) 0%,
        rgba(28, 21, 8, 0.9) 100%
      );
    border: 3px solid #5d4a2e;
    border-top-color: #8b7355;
    border-left-color: #8b7355;
    padding: 25px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .match-card:hover {
    border-color: #c9b68a;
    box-shadow: 0 0 20px rgba(201, 182, 138, 0.2);
  }

  .match-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(139, 115, 85, 0.3);
  }

  .match-id {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .match-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .match-number {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.1em;
    color: #c9b68a;
    letter-spacing: 1px;
  }

  .copy-button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(45deg, #3d2e1a, #2a1a0c);
    border: 2px solid #8b7355;
    color: #c9b68a;
    padding: 8px 15px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9em;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .copy-button:hover {
    border-color: #5aff7a;
    color: #5aff7a;
  }

  .copy-icon {
    font-size: 1.1em;
  }

  .copy-text {
    letter-spacing: 1px;
  }

  .copy-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent,
      rgba(90, 255, 122, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  .copy-button:hover .copy-glow {
    left: 100%;
  }

  .match-timestamp {
    margin-bottom: 25px;
    padding: 15px;
    background: rgba(10, 8, 5, 0.5);
    border-left: 3px solid #8b7355;
  }

  .timestamp-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .timestamp-value {
    font-size: 1em;
    color: #c9b68a;
  }

  .combatants {
    margin-bottom: 25px;
  }

  .combatant-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 10px;
    background: rgba(10, 8, 5, 0.3);
  }

  .combatant-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .combatant-link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .combatant-link:hover {
    color: #ffd95a;
  }

  .combatant-name {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1em;
    color: #c9b68a;
    letter-spacing: 1px;
  }

  .combatant-arrow {
    color: #8b7355;
    font-size: 0.9em;
    transition: all 0.3s ease;
  }

  .combatant-link:hover .combatant-arrow {
    color: #ffd95a;
    transform: translateX(3px);
  }

  .vs-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 15px 0;
  }

  .vs-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent,
      #8b7355,
      transparent
    );
  }

  .vs-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2em;
    color: #ff5a5a;
    text-shadow: 0 0 5px rgba(255, 90, 90, 0.5);
    padding: 0 15px;
  }

  .victor-panel {
    background: linear-gradient(135deg, 
      rgba(90, 255, 122, 0.1) 0%,
      rgba(28, 21, 8, 0.9) 100%
    );
    border: 2px solid #5aff7a;
    padding: 20px;
    position: relative;
  }

  .victor-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
  }

  .victor-icon {
    font-size: 1.5em;
    color: #ffd95a;
  }

  .victor-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1em;
    color: #c9b68a;
    letter-spacing: 2px;
  }

  .victor-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .victor-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .victor-link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .victor-link:hover {
    color: #ffd95a;
  }

  .victor-name {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2em;
    color: #5aff7a;
    letter-spacing: 1px;
  }

  .victor-arrow {
    color: #5aff7a;
    font-size: 0.9em;
    transition: all 0.3s ease;
  }

  .victor-link:hover .victor-arrow {
    transform: translateX(3px);
  }

  .victor-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
    margin-left: auto;
  }

  .no-matches, .error-state {
    text-align: center;
    padding: 60px 20px;
    border: 3px solid #8b7355;
    margin-top: 40px;
  }

  .empty-state, .error-state {
    max-width: 600px;
    margin: 0 auto;
  }

  .empty-icon, .error-icon {
    font-size: 4em;
    color: #8b7355;
    margin-bottom: 20px;
    opacity: 0.7;
  }

  .error-icon {
    color: #ff5a5a;
  }

  .empty-title, .error-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8em;
    color: #c9b68a;
    margin-bottom: 15px;
    letter-spacing: 2px;
  }

  .error-title {
    color: #ff5a5a;
  }

  .empty-subtitle, .error-subtitle {
    font-size: 1.1em;
    color: #8b7355;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .empty-cyrillic, .error-cyrillic {
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .terminal-footer {
    background: linear-gradient(to top, #3d2e1a, #2a1a0c);
    padding: 12px 20px;
    border-top: 3px solid #8b7355;
  }

  .status-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  .status-text {
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .status-light {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #5aff7a;
  }

  .status-light.active {
    animation: pulse 2s infinite;
  }

  .status-light.error {
    background: #ff5a5a;
    animation: pulse 1s infinite;
  }
</style>