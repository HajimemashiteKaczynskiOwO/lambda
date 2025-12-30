<script>
  export let data;
</script>

<div class="terminal-container">
  <div class="console-header">
    <div class="console-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <div class="console-title">CITIZEN TERMINAL v1.7</div>
    <div class="cyrillic-label">ТЕРМИНАЛ ГРАЖДАНИНА</div>
  </div>

  <main class="main-frame">
    <div class="scan-line"></div>
    
    <div class="user-welcome">
      <div class="avatar-container">
        <div class="avatar-circle">
          <div class="avatar-inner">
            <div class="avatar-glow"></div>
          </div>
          <div class="avatar-pulse"></div>
        </div>
        <div class="avatar-status">
          <div class="status-dot active"></div>
          <span class="status-text">ONLINE</span>
        </div>
      </div>
      
      <div class="welcome-message">
        <h1 class="glitch-text" data-text="CITIZEN ACCESS GRANTED">CITIZEN ACCESS GRANTED</h1>
        <div class="welcome-subtitle">
          <span class="cyrillic-subtitle">ДОСТУП РАЗРЕШЕН</span>
          <div class="pulse-dot"></div>
        </div>
      </div>
    </div>

    <div class="citizen-info">
      <div class="info-panel">
        <div class="panel-header">
          <div class="panel-title">
            <span class="panel-icon">👤</span>
            <span class="panel-label">CITIZEN IDENTIFICATION</span>
          </div>
          <span class="panel-cyrillic">ИДЕНТИФИКАЦИЯ</span>
        </div>
        
        <div class="identity-display">
          <div class="identity-row">
            <div class="identity-label">
              <span class="label-text">CURRENT USER</span>
              <span class="label-cyrillic">ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ</span>
            </div>
            <div class="identity-value glitch-username" data-text="{data.user.username}">{data.user.username}</div>
          </div>
          
          <div class="identity-divider">
            <div class="divider-line"></div>
            <div class="divider-icon">⚙</div>
            <div class="divider-line"></div>
          </div>
          
          <div class="identity-row">
            <div class="identity-label">
              <span class="label-text">CLEARANCE LEVEL</span>
              <span class="label-cyrillic">УРОВЕНЬ ДОПУСКА</span>
            </div>
            <div class="clearance-level">
              <div class="clearance-badge">LEVEL O5</div>
              <div class="clearance-bar">
                <div class="bar-segment active"></div>
                <div class="bar-segment active"></div>
                <div class="bar-segment active"></div>
                <div class="bar-segment active"></div>
                <div class="bar-segment active"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dashboard-content">
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <span class="panel-icon">📊</span>
            <span class="panel-label">TERMINAL DASHBOARD</span>
          </div>
          <span class="panel-cyrillic">ПАНЕЛЬ УПРАВЛЕНИЯ</span>
        </div>
        
        <div class="welcome-text">
          <div class="message-line">
            <span class="line-prefix">></span>
            <span class="line-text">WELCOME TO YOUR DASHBOARD, {data.user.username}.</span>
          </div>
          <div class="message-line">
            <span class="line-prefix">></span>
            <span class="line-text">SYSTEM TIME: {new Date().toLocaleTimeString()}</span>
          </div>
          <div class="message-line">
            <span class="line-prefix">></span>
            <span class="line-text">ACCESS PRIVILEGES: VERIFIED</span>
          </div>
          <div class="message-line">
            <span class="line-prefix">></span>
            <span class="line-text">DATABASE CONNECTION: SECURE</span>
          </div>
        </div>
        
        <div class="dashboard-grid">
          <div class="dashboard-card">
            <div class="card-icon">⚔</div>
            <div class="card-label">COMBAT SIMULATION</div>
            <a href="/games" class="card-link">
              <span class="link-text">ACCESS ARENA</span>
              <span class="link-arrow">►</span>
            </a>
          </div>
          
          <div class="dashboard-card">
            <div class="card-icon">👥</div>
            <div class="card-label">COMBATANT DATABASE</div>
            <a href="/characters" class="card-link">
              <span class="link-text">VIEW OPERATIVES</span>
              <span class="link-arrow">►</span>
            </a>
          </div>

        </div>
      </div>
    </div>

    <div class="system-status">
      <div class="status-panel">
        <div class="panel-header">
          <div class="panel-title">
            <span class="panel-icon">📡</span>
            <span class="panel-label">SYSTEM MONITOR</span>
          </div>
          <span class="panel-cyrillic">МОНИТОР СИСТЕМЫ</span>
        </div>
        
        <div class="status-grid">
          <div class="status-item">
            <div class="status-indicator active"></div>
            <div class="status-info">
              <div class="status-label">NETWORK</div>
              <div class="status-value">ONLINE</div>
            </div>
          </div>
          
          <div class="status-item">
            <div class="status-indicator active"></div>
            <div class="status-info">
              <div class="status-label">DATABASE</div>
              <div class="status-value">SYNCHRONIZED</div>
            </div>
          </div>
          
          <div class="status-item">
            <div class="status-indicator active"></div>
            <div class="status-info">
              <div class="status-label">SECURITY</div>
              <div class="status-value">ENCRYPTED</div>
            </div>
          </div>
          
          <div class="status-item">
            <div class="status-indicator warning"></div>
            <div class="status-info">
              <div class="status-label">CPU LOAD</div>
              <div class="status-value">42%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="terminal-footer">
    <div class="status-bar">
      <span class="status-text">USER: {data.user.username}</span>
      <span class="status-light active"></span>
      <span class="status-text">SESSION: ACTIVE</span>
      <span class="status-light active"></span>
      <span class="status-text">TERMINAL: READY</span>
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
    max-width: 1000px;
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

  .user-welcome {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 2px solid rgba(139, 115, 85, 0.3);
  }

  .avatar-container {
    position: relative;
    flex-shrink: 0;
  }

  .avatar-circle {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #3d2e1a, #2a1a0c);
    border: 4px solid #8b7355;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .avatar-inner {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #5d4a2e, #3d2e1a);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .avatar-glow {
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(201, 182, 138, 0.3), transparent 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .avatar-pulse {
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border: 2px solid #5aff7a;
    border-radius: 50%;
    animation: pulse 3s infinite;
    opacity: 0.5;
  }

  .avatar-status {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    justify-content: center;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #5d4a2e;
  }

  .status-dot.active {
    background: #5aff7a;
    box-shadow: 0 0 10px #5aff7a;
    animation: pulse 2s infinite;
  }

  .status-text {
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .welcome-message {
    flex: 1;
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

  .welcome-subtitle {
    display: flex;
    align-items: center;
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

  .citizen-info {
    margin-bottom: 40px;
  }

  .info-panel {
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

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
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
    font-size: 1.3em;
  }

  .panel-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2em;
    color: #c9b68a;
    letter-spacing: 2px;
  }

  .panel-cyrillic {
    font-size: 0.9em;
    color: #8b7355;
  }

  .identity-display {
    margin-top: 20px;
  }

  .identity-row {
    margin-bottom: 25px;
  }

  .identity-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .label-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .label-cyrillic {
    font-size: 0.8em;
    color: #5d4a2e;
  }

  .identity-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.5em;
    color: #c9b68a;
    text-shadow: 0 0 10px rgba(201, 182, 138, 0.5);
    padding: 15px;
    background: rgba(10, 8, 5, 0.5);
    border-left: 4px solid #8b7355;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .glitch-username {
    position: relative;
  }

  .glitch-username::before {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -2px 0 #ff5a5a;
    clip: rect(42px, 9999px, 44px, 0);
    animation: glitch 3s infinite linear alternate-reverse;
    opacity: 0.7;
  }

  .identity-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
  }

  .divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent,
      #8b7355,
      transparent
    );
  }

  .divider-icon {
    color: #8b7355;
    font-size: 1.2em;
  }

  .clearance-level {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .clearance-badge {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2em;
    color: #ffd95a;
    background: rgba(255, 217, 90, 0.1);
    border: 2px solid #ffd95a;
    padding: 10px 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .clearance-bar {
    display: flex;
    gap: 5px;
    flex: 1;
  }

  .bar-segment {
    flex: 1;
    height: 10px;
    background: rgba(93, 74, 46, 0.3);
    position: relative;
    overflow: hidden;
  }

  .bar-segment.active {
    background: linear-gradient(to bottom, #ffd95a, #8b7355);
    box-shadow: 0 0 5px rgba(255, 217, 90, 0.5);
  }

  .bar-segment.active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .dashboard-content {
    margin-bottom: 40px;
  }

  .content-panel {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.8) 0%,
        rgba(28, 21, 8, 0.8) 100%
      );
    border: 3px solid #5d4a2e;
    padding: 25px;
  }

  .welcome-text {
    background: rgba(10, 8, 5, 0.5);
    padding: 20px;
    margin-bottom: 30px;
    border-left: 4px solid #8b7355;
  }

  .message-line {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .line-prefix {
    color: #5aff7a;
    font-size: 1.1em;
  }

  .line-text {
    color: #c9b68a;
    font-family: 'Share Tech Mono', monospace;
    letter-spacing: 1px;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .dashboard-card {
    background: rgba(10, 8, 5, 0.7);
    border: 2px solid #5d4a2e;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .dashboard-card:hover {
    border-color: #8b7355;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 115, 85, 0.2);
  }

  .card-icon {
    font-size: 2.5em;
    color: #8b7355;
    margin-bottom: 15px;
  }

  .card-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 1px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    background: linear-gradient(45deg, #3d2e1a, #2a1a0c);
    border: 2px solid #8b7355;
    padding: 8px 15px;
    transition: all 0.3s ease;
  }

  .card-link:hover {
    border-color: #5aff7a;
    color: #5aff7a;
  }

  .link-text {
    font-size: 0.8em;
    color: #c9b68a;
    letter-spacing: 1px;
  }

  .card-link:hover .link-text {
    color: #5aff7a;
  }

  .link-arrow {
    color: #8b7355;
    font-size: 0.9em;
    transition: all 0.3s ease;
  }

  .card-link:hover .link-arrow {
    color: #5aff7a;
    transform: translateX(3px);
  }

  .system-status {
    margin-bottom: 20px;
  }

  .status-panel {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.8) 0%,
        rgba(28, 21, 8, 0.8) 100%
      );
    border: 3px solid #5d4a2e;
    padding: 25px;
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .status-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(10, 8, 5, 0.5);
    border-left: 3px solid #8b7355;
  }

  .status-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .status-indicator.active {
    background: #5aff7a;
    box-shadow: 0 0 10px #5aff7a;
    animation: pulse 2s infinite;
  }

  .status-indicator.warning {
    background: #ffd95a;
    box-shadow: 0 0 10px #ffd95a;
    animation: pulse 1.5s infinite;
  }

  .status-info {
    flex: 1;
  }

  .status-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 3px;
  }

  .status-value {
    font-size: 1em;
    color: #c9b68a;
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