<!-- src/routes/+page.svelte -->
<script>
  // No data needed for homepage
</script>

<div class="lambda-terminal">
  <div class="console-header">
    <div class="console-title">λ-LAMBDA COMPLEX INTRANET v17</div>
    <div class="cyrillic-label">λ-ЛАМБДА КОМПЛЕКС</div>
  </div>

  <main class="main-frame">
    <div class="scan-line"></div>
    
    <div class="lambda-logo">
      <div class="logo-container">
        <div class="lambda-symbol">λ</div>
        <div class="logo-text">
          <span class="logo-main">RESISTANCE</span>
          <span class="logo-sub">INTRANET</span>
        </div>
        <div class="logo-corrosion"></div>
      </div>
      <div class="logo-subtitle">
        <span class="cyrillic-subtitle">СОПРОТИВЛЕНИЕ ИНТРАНЕТ</span>
        <div class="pulse-dot"></div>
      </div>
    </div>

    <div class="biodome-status">
      <div class="status-panel">
        <div class="panel-header">
          <div class="panel-title">
            <span class="panel-icon">🏙</span>
            <span class="panel-label">CITY 17 STATUS</span>
          </div>
          <span class="panel-cyrillic">СТАТУС ГОРОДА 17</span>
        </div>
        <div class="status-grid">
          <div class="status-item critical">
            <div class="status-indicator"></div>
            <div class="status-info">
              <div class="status-label">CITADEL</div>
              <div class="status-value">ACTIVE</div>
              <div class="status-cyrillic">ЦИТАДЕЛЬ</div>
            </div>
          </div>
          <div class="status-item warning">
            <div class="status-indicator"></div>
            <div class="status-info">
              <div class="status-label">COMBINE PATROLS</div>
              <div class="status-value">HIGH</div>
              <div class="status-cyrillic">ПАТРУЛИ</div>
            </div>
          </div>
          <div class="status-item active">
            <div class="status-indicator"></div>
            <div class="status-info">
              <div class="status-label">RESISTANCE</div>
              <div class="status-value">ACTIVE</div>
              <div class="status-cyrillic">СОПРОТИВЛЕНИЕ</div>
            </div>
          </div>
          <div class="status-item stable">
            <div class="status-indicator"></div>
            <div class="status-info">
              <div class="status-label">DARK ENERGY</div>
              <div class="status-value">STABLE</div>
              <div class="status-cyrillic">ЭНЕРГИЯ</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="transmission-panel">
      <div class="transmission-header">
        <div class="transmission-title">
          <span class="transmission-icon">📻</span>
          <span class="transmission-label">PRIORITY TRANSMISSION</span>
        </div>
        <div class="transmission-timestamp">
          <span class="timestamp">[TRANSMIT: {new Date().toLocaleDateString()}]</span>
        </div>
      </div>
      
      <div class="transmission-content">
        <div class="message-line">
          <span class="line-prefix">></span>
          <span class="line-text">RISE AND SHINE, CITIZEN.</span>
        </div>
        <div class="message-line">
          <span class="line-prefix">></span>
          <span class="line-text">WELCOME TO THE LAMBDA COMPLEX INTRANET.</span>
        </div>
        <div class="message-line">
          <span class="line-prefix">></span>
          <span class="line-text">THE COMBINE ADMINISTRATION MONITORS ALL COMMUNICATIONS.</span>
        </div>
        <div class="message-line">
          <span class="line-prefix">></span>
          <span class="line-text">REMAIN VIGILANT. TRUST NO ONE. SURVIVE.</span>
        </div>
        <div class="message-line">
          <span class="line-prefix">></span>
          <span class="line-text highlight">λ-LAMBDA PROTOCOL ACTIVE. COORDINATE RESISTANCE.</span>
        </div>
      </div>
      
      <div class="transmission-footer">
        <div class="source-tag">
          <span class="source-label">SOURCE:</span>
          <span class="source-value">DR. WALLACE BREEN</span>
          <span class="source-cyrillic">ДОКТОР БРИН</span>
        </div>
        <div class="encryption-tag">
          <span class="encryption-icon">🔒</span>
          <span class="encryption-text">ENCRYPTED</span>
        </div>
      </div>
    </div>

    <div class="access-grid">
      <div class="access-card">
        <div class="card-header">
          <div class="card-icon">⚔</div>
          <div class="card-title">COMBAT SIMULATION</div>
          <div class="card-cyrillic">СИМУЛЯТОР</div>
        </div>
        <div class="card-content">
          <p>Train for urban combat operations against Combine forces. Record and analyze engagement data.</p>
        </div>
        <a href="/games" class="access-button">
          <span class="button-text">ACCESS ARENA</span>
          <span class="button-cyrillic">АРЕНА</span>
          <div class="button-rust"></div>
        </a>
      </div>
      
      <div class="access-card">
        <div class="card-header">
          <div class="card-icon">👥</div>
          <div class="card-title">COMBATANT DATABASE</div>
          <div class="card-cyrillic">БАЗА ДАННЫХ</div>
        </div>
        <div class="card-content">
          <p>Access Resistance operative profiles, performance metrics, and engagement histories.</p>
        </div>
        <a href="/characters" class="access-button">
          <span class="button-text">VIEW OPERATIVES</span>
          <span class="button-cyrillic">ОПЕРАТИВНИКИ</span>
          <div class="button-rust"></div>
        </a>
      </div>
      
      <div class="access-card">
        <div class="card-header">
          <div class="card-icon">📊</div>
          <div class="card-title">ANALYTICS</div>
          <div class="card-cyrillic">АНАЛИТИКА</div>
        </div>
        <div class="card-content">
          <p>Strategic analysis of resistance operations and Combine troop movements. Classified.</p>
        </div>
        <a href="/dashboard" class="access-button">
          <span class="button-text">ACCESS DATA</span>
          <span class="button-cyrillic">ДАННЫЕ</span>
          <div class="button-rust"></div>
        </a>
      </div>
      
      <div class="access-card">
        <div class="card-header">
          <div class="card-icon">⚠</div>
          <div class="card-title">SECURE CHANNELS</div>
          <div class="card-cyrillic">КАНАЛЫ</div>
        </div>
        <div class="card-content">
          <p>Encrypted communication protocols. Citizen identification required for access.</p>
        </div>
        <a href="/login" class="access-button">
          <span class="button-text">IDENTIFY</span>
          <span class="button-cyrillic">ИДЕНТИФИКАЦИЯ</span>
          <div class="button-rust"></div>
        </a>
      </div>
    </div>

    <div class="warning-panel">
      <div class="warning-header">
        <div class="warning-icon">🚨</div>
        <div class="warning-title">CIVIC MESSAGES</div>
        <div class="warning-cyrillic">СООБЩЕНИЯ</div>
      </div>
      <div class="warning-content">
        <div class="warning-message">
          <span class="warning-prefix">!</span>
          <span class="warning-text">CURFEW IN EFFECT FROM 22:00 TO 06:00. COMPLY WITH COMBINE AUTHORITY.</span>
        </div>
        <div class="warning-message">
          <span class="warning-prefix">!</span>
          <span class="warning-text">ANTI-CITIZEN ACTIVITY WILL BE MET WITH PERMANENT OFFWORLD RELOCATION.</span>
        </div>
        <div class="warning-message">
          <span class="warning-prefix">!</span>
          <span class="warning-text">REPORT SUSPICIOUS BEHAVIOR TO CIVIL PROTECTION IMMEDIATELY.</span>
        </div>
      </div>
    </div>
  </main>

  <div class="terminal-footer">
    <div class="status-bar">
      <span class="status-text">SYSTEM: CITY 17 INTRANET</span>
      <span class="status-light critical"></span>
      <span class="status-text">SECURITY LEVEL: BLACK MESA PROTOCOL</span>
      <span class="status-light active"></span>
      <span class="status-text">TRANSMISSION: ENCRYPTED λ</span>
    </div>
    <div class="copyright">
      <span>COMBINE ADMINISTRATION © {new Date().getFullYear()}</span>
      <span class="cyrillic-copyright">АДМИНИСТРАЦИЯ КОМБАЙН</span>
    </div>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');

  .lambda-terminal {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background: 
      linear-gradient(135deg, 
        #1c1508 0%, 
        #2a2318 25%,
        #1c1508 50%,
        #2a2318 75%,
        #1c1508 100%
      ),
      url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 100c0-13.8-11.2-25-25-25S4 86.2 4 100s11.2 25 25 25 25-11.2 25-25zm125 38c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25zm-57-63c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM68 180c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238b7355' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
    border: 12px solid transparent;
    border-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='rust' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h20v20H0z' fill='%233d2e1a'/%3E%3Cpath d='M0 0h2v2H0zM18 18h2v2H18z' fill='%235d4a2e'/%3E%3Cpath d='M5 5h2v2H5zM15 15h2v2H15z' fill='%238b7355'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23rust)'/%3E%3C/svg%3E") 30 stretch;
    box-shadow: 
      0 0 60px rgba(139, 115, 85, 0.4),
      inset 0 0 80px rgba(0, 0, 0, 0.8),
      0 0 0 4px #1a0f05,
      0 10px 40px rgba(0, 0, 0, 0.7);
    position: relative;
    overflow: hidden;
    font-family: 'Share Tech Mono', monospace;
    color: #c9b68a;
  }

  .console-header {
    background: 
      linear-gradient(to bottom, 
        #3d2e1a 0%,
        #2a1a0c 50%,
        #1a0f05 100%
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(139, 115, 85, 0.1) 2px,
        rgba(139, 115, 85, 0.1) 4px
      );
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 6px solid #5d4a2e;
    position: relative;
  }

  .console-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      #ff5a5a,
      #ffd95a,
      #5aff7a,
      #ffd95a,
      #ff5a5a
    );
    opacity: 0.3;
  }

  .console-dots {
    display: flex;
    gap: 10px;
  }

  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid rgba(0, 0, 0, 0.5);
    box-shadow: 
      inset 0 0 5px rgba(0, 0, 0, 0.5),
      0 1px 3px rgba(0, 0, 0, 0.8);
  }

  .red { 
    background: linear-gradient(135deg, #ff5a5a, #8b2e2a);
    animation: pulse-red 2s infinite;
  }
  
  .yellow { 
    background: linear-gradient(135deg, #ffd95a, #8b7355);
    animation: pulse-yellow 2.5s infinite;
  }
  
  .green { 
    background: linear-gradient(135deg, #5aff7a, #2e8b57);
    animation: pulse-green 3s infinite;
  }

  @keyframes pulse-red {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
  
  @keyframes pulse-yellow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 0.9; }
  }
  
  @keyframes pulse-green {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }

  .console-title {
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    font-size: 1.4em;
    color: #ffd95a;
    text-shadow: 
      0 0 10px rgba(255, 217, 90, 0.5),
      2px 2px 0 #5d4a2e,
      -1px -1px 0 #3d2e1a;
    letter-spacing: 3px;
    position: relative;
  }

  .console-title::before {
    content: '⚠';
    position: absolute;
    left: -30px;
    color: #ff5a5a;
    font-size: 0.8em;
  }

  .cyrillic-label {
    font-size: 1em;
    color: #8b7355;
    letter-spacing: 2px;
    text-shadow: 1px 1px 0 #1a0f05;
  }

  .main-frame {
    padding: 40px;
    position: relative;
    overflow: hidden;
    background: 
      radial-gradient(circle at 30% 20%, rgba(28, 21, 8, 0.9) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(45, 35, 20, 0.9) 0%, transparent 50%);
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(255, 90, 90, 0.8) 20%,
      rgba(255, 217, 90, 0.8) 50%,
      rgba(90, 255, 122, 0.8) 80%,
      transparent 100%
    );
    animation: scan 6s linear infinite;
    z-index: 1;
    box-shadow: 0 0 20px rgba(255, 90, 90, 0.3);
  }

  @keyframes scan {
    0% { top: 0; }
    100% { top: 100%; }
  }

  .lambda-logo {
    text-align: center;
    margin-bottom: 50px;
    position: relative;
    padding: 30px 0;
    border-bottom: 3px solid rgba(139, 115, 85, 0.3);
  }

  .logo-container {
    display: inline-flex;
    align-items: center;
    gap: 30px;
    background: rgba(10, 8, 5, 0.7);
    border: 8px solid;
    border-image: 
      linear-gradient(
        45deg,
        #8b7355,
        #5d4a2e,
        #3d2e1a,
        #5d4a2e
      ) 1;
    padding: 30px 50px;
    position: relative;
    margin-bottom: 20px;
  }

  .lambda-symbol {
    font-family: 'Orbitron', sans-serif;
    font-size: 8em;
    color: #ff5a5a;
    text-shadow: 
      0 0 30px rgba(255, 90, 90, 0.7),
      5px 5px 0 #3d2e1a;
    line-height: 1;
    animation: lambda-pulse 4s infinite;
  }

  @keyframes lambda-pulse {
    0%, 100% { opacity: 0.9; }
    50% { opacity: 0.7; }
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .logo-main {
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    font-size: 3.5em;
    color: #c9b68a;
    letter-spacing: 8px;
    text-transform: uppercase;
    text-shadow: 
      3px 3px 0 #5d4a2e,
      6px 6px 0 rgba(0, 0, 0, 0.5);
  }

  .logo-sub {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8em;
    color: #8b7355;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-top: 10px;
  }

  .logo-corrosion {
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    background: 
      radial-gradient(circle at 20% 30%, transparent 30%, rgba(139, 115, 85, 0.1) 70%),
      radial-gradient(circle at 80% 70%, transparent 40%, rgba(93, 74, 46, 0.1) 80%);
    pointer-events: none;
  }

  .logo-subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .cyrillic-subtitle {
    font-size: 1.3em;
    color: #8b7355;
    letter-spacing: 4px;
    text-shadow: 2px 2px 0 #1a0f05;
  }

  .pulse-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ff5a5a;
    box-shadow: 0 0 20px #ff5a5a;
    animation: pulse 2s infinite;
  }

  .biodome-status {
    margin-bottom: 40px;
  }

  .status-panel {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.95) 0%,
        rgba(28, 21, 8, 0.95) 100%
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(139, 115, 85, 0.05) 10px,
        rgba(139, 115, 85, 0.05) 20px
      );
    border: 6px solid;
    border-image: 
      linear-gradient(
        45deg,
        #8b2e2a,
        #5d4a2e,
        #3d2e1a,
        #5d4a2e,
        #8b2e2a
      ) 1;
    padding: 25px;
    position: relative;
    box-shadow: 
      inset 0 0 40px rgba(0, 0, 0, 0.9),
      0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .status-panel::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid rgba(139, 115, 85, 0.1);
    pointer-events: none;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 3px solid rgba(139, 115, 85, 0.3);
  }

  .panel-title {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .panel-icon {
    color: #ff5a5a;
    font-size: 1.5em;
    text-shadow: 0 0 10px rgba(255, 90, 90, 0.5);
  }

  .panel-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.3em;
    color: #ffd95a;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 2px 2px 0 #5d4a2e;
  }

  .panel-cyrillic {
    font-size: 1em;
    color: #8b7355;
    letter-spacing: 2px;
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .status-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: rgba(10, 8, 5, 0.7);
    border-left: 4px solid;
    position: relative;
    overflow: hidden;
  }

  .status-item.critical {
    border-left-color: #ff5a5a;
    background: linear-gradient(90deg, rgba(139, 46, 42, 0.1), transparent);
  }

  .status-item.warning {
    border-left-color: #ffd95a;
    background: linear-gradient(90deg, rgba(139, 115, 85, 0.1), transparent);
  }

  .status-item.active {
    border-left-color: #5aff7a;
    background: linear-gradient(90deg, rgba(46, 139, 87, 0.1), transparent);
  }

  .status-item.stable {
    border-left-color: #8b7355;
    background: linear-gradient(90deg, rgba(93, 74, 46, 0.1), transparent);
  }

  .status-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    flex-shrink: 0;
    border: 3px solid rgba(0, 0, 0, 0.5);
    box-shadow: 
      inset 0 0 10px rgba(0, 0, 0, 0.5),
      0 2px 5px rgba(0, 0, 0, 0.8);
  }

  .status-item.critical .status-indicator {
    background: radial-gradient(circle at 30% 30%, #ff5a5a, #8b2e2a);
    animation: pulse 1s infinite;
  }

  .status-item.warning .status-indicator {
    background: radial-gradient(circle at 30% 30%, #ffd95a, #8b7355);
    animation: pulse 2s infinite;
  }

  .status-item.active .status-indicator {
    background: radial-gradient(circle at 30% 30%, #5aff7a, #2e8b57);
    animation: pulse 3s infinite;
  }

  .status-item.stable .status-indicator {
    background: radial-gradient(circle at 30% 30%, #8b7355, #5d4a2e);
  }

  .status-info {
    flex: 1;
  }

  .status-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .status-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
    color: #ffd95a;
    text-shadow: 0 0 10px rgba(255, 217, 90, 0.3);
    margin-bottom: 5px;
  }

  .status-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .transmission-panel {
    background: 
      linear-gradient(135deg, 
        rgba(28, 21, 8, 0.95) 0%,
        rgba(45, 35, 20, 0.95) 100%
      ),
      url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%231a0f05'/%3E%3Cpath d='M20 20h60v60H20z' fill='none' stroke='%238b7355' stroke-width='2' stroke-dasharray='5,5'/%3E%3C/svg%3E");
    border: 6px solid;
    border-image: 
      linear-gradient(
        45deg,
        #5d4a2e,
        #3d2e1a,
        #5d4a2e,
        #3d2e1a
      ) 1;
    padding: 30px;
    margin-bottom: 40px;
    position: relative;
    box-shadow: 
      inset 0 0 50px rgba(0, 0, 0, 0.8),
      0 10px 40px rgba(0, 0, 0, 0.6);
  }

  .transmission-panel::before {
    content: 'CLASSIFIED';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-size: 5em;
    color: rgba(139, 115, 85, 0.05);
    letter-spacing: 10px;
    white-space: nowrap;
    z-index: 0;
  }

  .transmission-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
  }

  .transmission-title {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .transmission-icon {
    color: #5aff7a;
    font-size: 1.8em;
    text-shadow: 0 0 10px rgba(90, 255, 122, 0.5);
  }

  .transmission-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2em;
    color: #c9b68a;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .timestamp {
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 2px;
  }

  .transmission-content {
    position: relative;
    z-index: 1;
    margin-bottom: 25px;
  }

  .message-line {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    padding: 10px;
    background: rgba(10, 8, 5, 0.5);
    border-left: 3px solid #8b7355;
  }

  .line-prefix {
    color: #ff5a5a;
    font-size: 1.2em;
    font-weight: bold;
  }

  .line-text {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.1em;
    color: #c9b68a;
    letter-spacing: 1px;
  }

  .line-text.highlight {
    color: #ffd95a;
    text-shadow: 0 0 10px rgba(255, 217, 90, 0.5);
    font-weight: bold;
  }

  .transmission-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    padding-top: 20px;
    border-top: 2px solid rgba(139, 115, 85, 0.3);
  }

  .source-tag {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .source-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .source-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1em;
    color: #c9b68a;
    letter-spacing: 2px;
  }

  .source-cyrillic {
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .encryption-tag {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 15px;
    background: rgba(90, 255, 122, 0.1);
    border: 2px solid #5aff7a;
  }

  .encryption-icon {
    color: #5aff7a;
    font-size: 1.2em;
  }

  .encryption-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #5aff7a;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .access-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
  }

  .access-card {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.9) 0%,
        rgba(28, 21, 8, 0.9) 100%
      ),
      url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%232a1a0c'/%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%235d4a2e' stroke-width='2'/%3E%3C/svg%3E");
    border: 4px solid;
    border-image: 
      linear-gradient(
        45deg,
        #8b7355,
        #5d4a2e,
        #3d2e1a
      ) 1;
    padding: 25px;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 
      inset 0 0 30px rgba(0, 0, 0, 0.7),
      0 10px 20px rgba(0, 0, 0, 0.5);
  }

  .access-card:hover {
    transform: translateY(-5px);
    box-shadow: 
      inset 0 0 30px rgba(0, 0, 0, 0.7),
      0 15px 30px rgba(0, 0, 0, 0.7);
    border-image: 
      linear-gradient(
        45deg,
        #c9b68a,
        #8b7355,
        #5d4a2e
      ) 1;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(139, 115, 85, 0.3);
  }

  .card-icon {
    font-size: 2em;
    color: #8b7355;
  }

  .card-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1em;
    color: #c9b68a;
    letter-spacing: 2px;
    text-transform: uppercase;
    flex: 1;
  }

  .card-cyrillic {
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .card-content {
    margin-bottom: 25px;
  }

  .card-content p {
    color: #c9b68a;
    line-height: 1.6;
    font-size: 0.95em;
  }

  .access-button {
    display: block;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(45deg, #3d2e1a, #2a1a0c);
    border: 3px solid #8b7355;
    padding: 15px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .access-button:hover {
    background: linear-gradient(45deg, #5d4a2e, #3d2e1a);
    border-color: #ffd95a;
  }

  .button-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
  }

  .button-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
    display: block;
    margin-top: 5px;
  }

  .button-rust {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent,
      rgba(139, 115, 85, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  .access-button:hover .button-rust {
    left: 100%;
  }

  .warning-panel {
    background: 
      linear-gradient(135deg, 
        rgba(139, 46, 42, 0.1) 0%,
        rgba(28, 21, 8, 0.9) 100%
      );
    border: 4px solid #8b2e2a;
    padding: 25px;
    position: relative;
  }

  .warning-panel::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 2px solid rgba(255, 90, 90, 0.1);
    pointer-events: none;
  }

  .warning-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .warning-icon {
    color: #ff5a5a;
    font-size: 2em;
    text-shadow: 0 0 10px rgba(255, 90, 90, 0.5);
    animation: pulse 1.5s infinite;
  }

  .warning-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.3em;
    color: #ff5a5a;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(255, 90, 90, 0.3);
    flex: 1;
  }

  .warning-cyrillic {
    font-size: 1em;
    color: #8b2e2a;
    letter-spacing: 2px;
  }

  .warning-content {
    background: rgba(10, 8, 5, 0.7);
    padding: 15px;
    border-left: 4px solid #ff5a5a;
  }

  .warning-message {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    padding: 8px;
    background: rgba(255, 90, 90, 0.05);
  }

  .warning-prefix {
    color: #ff5a5a;
    font-weight: bold;
    font-size: 1.2em;
  }

  .warning-text {
    color: #ffd95a;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.95em;
    letter-spacing: 1px;
    flex: 1;
  }

  .terminal-footer {
    background: 
      linear-gradient(to top, 
        #1a0f05 0%,
        #2a1a0c 50%,
        #3d2e1a 100%
      );
    padding: 20px 30px;
    border-top: 6px solid #5d4a2e;
    position: relative;
  }

  .terminal-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      #ff5a5a,
      transparent,
      #5aff7a,
      transparent,
      #ff5a5a
    );
  }

  .status-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 15px;
  }

  .status-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .status-light {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.5);
  }

  .status-light.critical {
    background: radial-gradient(circle at 30% 30%, #ff5a5a, #8b2e2a);
    animation: pulse 1s infinite;
  }

  .status-light.active {
    background: radial-gradient(circle at 30% 30%, #5aff7a, #2e8b57);
    animation: pulse 2s infinite;
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    border-top: 2px solid rgba(139, 115, 85, 0.2);
  }

  .copyright span {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 2px;
  }

  .cyrillic-copyright {
    font-size: 0.8em;
    color: #5d4a2e;
    letter-spacing: 1px;
  }

  /* Rust and corrosion effects */
  .lambda-terminal::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 10%, transparent 30%, rgba(139, 115, 85, 0.05) 70%),
      radial-gradient(circle at 80% 90%, transparent 40%, rgba(93, 74, 46, 0.05) 80%),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(139, 115, 85, 0.02) 2px,
        rgba(139, 115, 85, 0.02) 4px
      );
    pointer-events: none;
    z-index: 1;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .main-frame {
      padding: 30px;
    }
    
    .logo-container {
      flex-direction: column;
      gap: 20px;
      padding: 20px 30px;
    }
    
    .lambda-symbol {
      font-size: 6em;
    }
    
    .logo-main {
      font-size: 2.5em;
      letter-spacing: 6px;
    }
    
    .logo-sub {
      font-size: 1.3em;
      letter-spacing: 4px;
    }
  }

  @media (max-width: 768px) {
    .console-header {
      flex-direction: column;
      gap: 15px;
      padding: 15px;
    }
    
    .main-frame {
      padding: 20px;
    }
    
    .access-grid {
      grid-template-columns: 1fr;
    }
    
    .status-grid {
      grid-template-columns: 1fr;
    }
    
    .transmission-header {
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }
    
    .terminal-footer .status-bar {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
    
    .copyright {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>