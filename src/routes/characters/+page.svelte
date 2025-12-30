<script>
    export let data;
    const { players } = data;


</script>

<div class="terminal-container">
  <div class="console-header">
    <div class="console-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <div class="console-title">COMBATANT DATABASE v4.1</div>
    <div class="cyrillic-label">БАЗА ДАННЫХ БОЙЦОВ</div>
  </div>

  <main class="main-frame">
    <div class="scan-line"></div>
    
    <div class="navigation">
      <a href="/games" class="rusty-link">
        <span class="link-arrow">◄</span>
        <span class="link-text">RETURN TO MATCH ARCHIVES</span>
        <span class="link-cyrillic">АРХИВЫ БОЁВ</span>
        <span class="link-glow"></span>
      </a>
    </div>

    <div class="database-header">
      <h1 class="glitch-text" data-text="REGISTERED COMBATANTS">REGISTERED COMBATANTS</h1>
      <div class="subtitle">
        <span class="cyrillic-subtitle">ЗАРЕГИСТРИРОВАННЫЕ БОЙЦЫ</span>
        <div class="pulse-dot"></div>
      </div>
    </div>

    <div class="stats-display">
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-label">ACTIVE OPERATIVES</div>
          <div class="stat-value">{players.length}</div>
          <div class="stat-cyrillic">АКТИВНЫЕ</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOTAL MATCHES</div>
          <div class="stat-value">{players.reduce((sum, p) => sum + p.matches, 0)}</div>
          <div class="stat-cyrillic">БОЁВ</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">SYSTEM STATUS</div>
          <div class="stat-value status">
            <span class="status-indicator active"></span>
            ONLINE
          </div>
          <div class="stat-cyrillic">ОНЛАЙН</div>
        </div>
      </div>
    </div>

    <div class="combatants-grid">
      {#each players as plr}
        <div class="combatant-card">
          <div class="card-header">
            <div class="card-id">ID-{plr.id.toString().padStart(3, '0')}</div>
            <div class="card-status">
              <div class="status-indicator {plr.wins > plr.losses ? 'success' : 'warning'}"></div>
              <span class="status-text">{plr.wins > plr.losses ? 'DOMINANT' : 'ACTIVE'}</span>
            </div>
          </div>
          
          <a href="/characters/{plr.id}" 
          class="combatant-link"
          >
            <h3 class="glitch-text-small" data-text="{plr.username}">{plr.username}</h3>
            <div class="link-hover">
              <span class="hover-text">ACCESS PROFILE</span>
              <span class="hover-arrow">►</span>
            </div>
          </a>
          
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-label-small">ENGAGEMENTS</div>
              <div class="stat-value-large">{plr.matches}</div>
              <div class="stat-bar">
                <div class="bar-fill" style="width: {(plr.matches / Math.max(...players.map(p => p.matches)) * 100) || 0}%"></div>
              </div>
            </div>
            
            <div class="stat-row">
              <div class="stat-half">
                <div class="stat-label-tiny">VICTORIES</div>
                <div class="stat-value-positive">{plr.wins}</div>
              </div>
              <div class="stat-half">
                <div class="stat-label-tiny">DEFEATS</div>
                <div class="stat-value-negative">{plr.losses}</div>
              </div>
            </div>
            
            <div class="performance-metric">
              <div class="metric-header">
                <span class="metric-label">EFFECTIVENESS RATING</span>
                <span class="metric-cyrillic">ЭФФЕКТИВНОСТЬ</span>
              </div>
              <div class="metric-value">{(plr.wins / plr.matches * 100 || 0).toFixed(1)}%</div>
              <div class="metric-gauge">
                <div class="gauge-fill" style="width: {(plr.wins / plr.matches * 100) || 0}%"></div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="divider">
      <div class="line"></div>
      <div class="divider-text">NEW OPERATIVE REGISTRATION</div>
      <div class="line"></div>
    </div>

    <div class="create-section">
      <h2 class="glitch-text" data-text="COMBATANT REGISTRATION PROTOCOL">COMBATANT REGISTRATION PROTOCOL</h2>
      
      <form method="POST" class="registration-form">
        <div class="form-header">
          <div class="form-title">
            <span class="form-number">01</span>
            <span class="form-label">INITIATE NEW OPERATIVE</span>
          </div>
          <span class="form-cyrillic">НОВЫЙ БОЕЦ</span>
        </div>
        
        <div class="input-group">
          <div class="input-wrapper">
            <div class="input-label-row">
              <span class="input-label">CODENAME DESIGNATION</span>
              <span class="input-cyrillic">ПСЕВДОНИМ</span>
            </div>
            <div class="input-field">
              <span class="input-prefix">></span>
              <input 
                name="name" 
                placeholder="ENTER CODENAME (MAX 12 CHARS)" 
                maxlength="12" 
                class="terminal-input"
                required
              />
              <div class="input-bottom-bar"></div>
            </div>
            <div class="input-hint">
              <span class="hint-text">DESIGNATION MUST BE UNIQUE AND 12 CHARACTERS MAXIMUM</span>
            </div>
          </div>
        </div>
        
        <button type="submit" formaction="?/create" class="registration-button">
          <span class="button-main-text">ACTIVATE OPERATIVE</span>
          <span class="button-sub-text">COMMIT TO DATABASE</span>
          <span class="button-cyrillic">АКТИВИРОВАТЬ</span>
          <div class="button-glow"></div>
          <div class="button-sparks">
            <span class="spark"></span>
            <span class="spark"></span>
            <span class="spark"></span>
          </div>
        </button>
      </form>
    </div>
  </main>

  <div class="terminal-footer">
    <div class="status-bar">
      <span class="status-text">DATABASE: SYNCHRONIZED</span>
      <span class="status-light active"></span>
      <span class="status-text">RECORDS: {players.length} OPERATIVES</span>
      <span class="status-light active"></span>
      <span class="status-text">LAST UPDATE: REAL-TIME</span>
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
    max-width: 1400px;
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

  .database-header {
    margin-bottom: 40px;
    text-align: center;
  }

  .glitch-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.2em;
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

  .subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .cyrillic-subtitle {
    font-size: 1.1em;
    color: #8b7355;
    letter-spacing: 2px;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #5aff7a;
    box-shadow: 0 0 10px #5aff7a;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  .stats-display {
    margin-bottom: 40px;
  }

  .stats-row {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  .stat-card {
    flex: 1;
    max-width: 200px;
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.8) 0%,
        rgba(28, 21, 8, 0.8) 100%
      );
    border: 3px solid #8b7355;
    padding: 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .stat-card::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 1px solid rgba(139, 115, 85, 0.2);
    pointer-events: none;
  }

  .stat-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .stat-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.5em;
    color: #c9b68a;
    text-shadow: 0 0 10px rgba(201, 182, 138, 0.5);
    margin-bottom: 5px;
  }

  .stat-value.status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1.5em;
  }

  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #5d4a2e;
  }

  .status-indicator.active {
    background: #5aff7a;
    box-shadow: 0 0 10px #5aff7a;
    animation: pulse 2s infinite;
  }

  .stat-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
  }

  .combatants-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }

  .combatant-card {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.9) 0%,
        rgba(28, 21, 8, 0.9) 100%
      ),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238b7355' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    border: 3px solid #5d4a2e;
    border-top-color: #8b7355;
    border-left-color: #8b7355;
    padding: 20px;
    position: relative;
    transition: all 0.3s ease;
  }

  .combatant-card:hover {
    border-color: #c9b68a;
    box-shadow: 0 0 20px rgba(201, 182, 138, 0.2);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(139, 115, 85, 0.3);
  }

  .card-id {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .card-status {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .status-indicator.success {
    background: #5aff7a;
    box-shadow: 0 0 5px #5aff7a;
  }

  .status-indicator.warning {
    background: #ffd95a;
    box-shadow: 0 0 5px #ffd95a;
  }

  .status-text {
    font-size: 0.7em;
    color: #8b7355;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .combatant-link {
    text-decoration: none;
    display: block;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }

  .glitch-text-small {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.4em;
    color: #c9b68a;
    text-shadow: 
      1px 1px 0 #8b7355,
      0 0 5px rgba(201, 182, 138, 0.3);
    margin-bottom: 10px;
    letter-spacing: 2px;
    position: relative;
    transition: all 0.3s ease;
  }

  .combatant-link:hover .glitch-text-small {
    color: #ffd95a;
    text-shadow: 0 0 10px rgba(255, 217, 90, 0.5);
  }

  .link-hover {
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    transform: translateY(5px);
    transition: all 0.3s ease;
  }

  .combatant-link:hover .link-hover {
    opacity: 1;
    transform: translateY(0);
  }

  .hover-text {
    font-size: 0.8em;
    color: #8b7355;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .hover-arrow {
    color: #8b7355;
    font-size: 0.8em;
  }

  .stats-grid {
    margin-top: 15px;
  }

  .stat-item {
    margin-bottom: 15px;
  }

  .stat-label-small {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.7em;
    color: #8b7355;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .stat-value-large {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8em;
    color: #c9b68a;
    margin-bottom: 5px;
  }

  .stat-bar {
    height: 4px;
    background: rgba(93, 74, 46, 0.5);
    position: relative;
    overflow: hidden;
  }

  .bar-fill {
    position: absolute;
    height: 100%;
    background: linear-gradient(90deg, #8b7355, #c9b68a);
    transition: width 1s ease;
  }

  .stat-row {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }

  .stat-half {
    flex: 1;
  }

  .stat-label-tiny {
    font-size: 0.7em;
    color: #8b7355;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 3px;
  }

  .stat-value-positive {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.3em;
    color: #5aff7a;
    text-shadow: 0 0 5px rgba(90, 255, 122, 0.5);
  }

  .stat-value-negative {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.3em;
    color: #ff5a5a;
    text-shadow: 0 0 5px rgba(255, 90, 90, 0.5);
  }

  .performance-metric {
    background: rgba(10, 8, 5, 0.5);
    padding: 15px;
    border-left: 3px solid #8b7355;
  }

  .metric-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .metric-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8em;
    color: #c9b68a;
    letter-spacing: 1px;
  }

  .metric-cyrillic {
    font-size: 0.7em;
    color: #8b7355;
  }

  .metric-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 2em;
    color: #c9b68a;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 0 0 10px rgba(201, 182, 138, 0.5);
  }

  .metric-gauge {
    height: 6px;
    background: rgba(93, 74, 46, 0.5);
    position: relative;
    overflow: hidden;
  }

  .gauge-fill {
    position: absolute;
    height: 100%;
    background: linear-gradient(90deg, #8b7355, #ffd95a);
    transition: width 1s ease;
  }

  .divider {
    display: flex;
    align-items: center;
    margin: 50px 0 40px 0;
    gap: 20px;
  }

  .line {
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent,
      #8b7355,
      #c9b68a,
      #8b7355,
      transparent
    );
  }

  .divider-text {
    font-family: 'Orbitron', sans-serif;
    color: #8b7355;
    font-size: 1em;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .create-section {
    margin-bottom: 30px;
  }

  .registration-form {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.9) 0%,
        rgba(28, 21, 8, 0.9) 100%
      );
    border: 4px solid;
    border-image: 
      linear-gradient(
        45deg,
        #8b7355,
        #5d4a2e,
        #3d2e1a,
        #5d4a2e
      ) 1;
    padding: 25px;
    position: relative;
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(139, 115, 85, 0.3);
  }

  .form-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .form-number {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
    color: #8b7355;
    text-shadow: 0 0 5px rgba(139, 115, 85, 0.5);
  }

  .form-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2em;
    color: #c9b68a;
    letter-spacing: 2px;
  }

  .form-cyrillic {
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .input-group {
    margin-bottom: 30px;
  }

  .input-wrapper {
    max-width: 500px;
  }

  .input-label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .input-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .input-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
  }

  .input-field {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .input-prefix {
    color: #8b7355;
    margin-right: 10px;
    font-size: 1.2em;
    text-shadow: 0 0 5px rgba(139, 115, 85, 0.5);
  }

  .terminal-input {
    flex: 1;
    background: rgba(10, 8, 5, 0.8);
    border: 2px solid #5d4a2e;
    border-top: 2px solid #8b7355;
    border-left: 2px solid #8b7355;
    color: #c9b68a;
    padding: 12px 15px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 1em;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }

  .terminal-input:focus {
    outline: none;
    border-color: #c9b68a;
    box-shadow: 0 0 15px rgba(201, 182, 138, 0.3);
    background: rgba(20, 16, 10, 0.9);
  }

  .terminal-input::placeholder {
    color: #8b7355;
    opacity: 0.7;
  }

  .input-bottom-bar {
    position: absolute;
    bottom: 28px;
    left: 45px;
    right: 25px;
    height: 2px;
    background: linear-gradient(90deg, 
      #8b7355,
      #c9b68a,
      #8b7355
    );
    opacity: 0.5;
  }

  .input-hint {
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-left: 2px solid #8b7355;
  }

  .hint-text {
    font-size: 0.8em;
    color: #8b7355;
  }

  .registration-button {
    position: relative;
    background: linear-gradient(45deg, #5d4a2e, #3d2e1a);
    border: 4px solid #8b7355;
    border-top-color: #c9b68a;
    border-left-color: #c9b68a;
    color: #c9b68a;
    padding: 20px 40px;
    font-family: 'Orbitron', sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    overflow: hidden;
  }

  .registration-button:hover {
    background: linear-gradient(45deg, #8b7355, #5d4a2e);
    border-color: #5aff7a;
    box-shadow: 0 0 30px rgba(90, 255, 122, 0.4);
  }

  .registration-button:active {
    transform: translateY(2px);
  }

  .button-main-text {
    font-size: 1.2em;
    text-transform: uppercase;
    z-index: 2;
  }

  .button-sub-text {
    font-size: 0.8em;
    color: #8b7355;
    z-index: 2;
  }

  .button-cyrillic {
    font-size: 0.9em;
    color: #8b7355;
    margin-top: 5px;
    z-index: 2;
  }

  .button-glow {
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

  .registration-button:hover .button-glow {
    left: 100%;
  }

  .button-sparks {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .spark {
    position: absolute;
    width: 2px;
    height: 20px;
    background: linear-gradient(to bottom, transparent, #5aff7a, transparent);
    opacity: 0;
  }

  .spark:nth-child(1) { left: 20%; animation: spark 1s infinite; }
  .spark:nth-child(2) { left: 50%; animation: spark 1s infinite 0.3s; }
  .spark:nth-child(3) { left: 80%; animation: spark 1s infinite 0.6s; }

  @keyframes spark {
    0% { top: 100%; opacity: 0; }
    50% { opacity: 1; }
    100% { top: 0%; opacity: 0; }
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
</style>