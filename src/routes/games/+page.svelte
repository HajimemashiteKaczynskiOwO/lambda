<script>
    export let data;
    let selectedPlayer1 = null;
    let selectedPlayer2 = null;

    function handlePlayer1Change(event) {
        const playerId = event.target.value;
        const player = data.players.find(p => p.id === playerId);
        selectedPlayer1 = player;
    }

    function handlePlayer2Change(event) {
        const playerId = event.target.value;
        const player = data.players.find(p => p.id === playerId);
        selectedPlayer2 = player;
    }
</script>

<div class="terminal-container">
  <div class="console-header">
    <div class="console-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <div class="console-title">COMBAT SIMULATION v3.2</div>
    <div class="cyrillic-label">СИМУЛЯЦИЯ БОЯ</div>
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

    <div class="match-header">
      <h1 class="glitch-text" data-text="INITIATE COMBAT PROTOCOL">INITIATE COMBAT PROTOCOL</h1>
      <div class="subtitle">
        <span class="cyrillic-subtitle">НАЧАТЬ БОЙ</span>
        <div class="pulse-dot"></div>
      </div>
    </div>

    <form method="POST" action="?/match" class="combat-form">
      <div class="combat-interface">
        <!-- Player 1 Selection -->
        <div class="combatant-panel left-panel">
          <div class="panel-header">
            <div class="panel-title">
              <span class="panel-number">01</span>
              <span class="panel-label">COMBATANT ALPHA</span>
            </div>
            <span class="cyrillic-hint">ПЕРВЫЙ ИГРОК</span>
          </div>
          
          <div class="selection-area">
            <div class="input-wrapper">
              <div class="select-header">
                <span class="select-label">SELECT UNIT</span>
                <span class="select-cyrillic">ВЫБОР</span>
              </div>
              <div class="custom-select">
                <select name="player1Id" required on:change={handlePlayer1Change} class="terminal-select">
                  <option value="">-- SELECT OPERATIVE --</option>
                  {#each data.players as p}
                    <option value={p.id}>{p.username}</option>
                  {/each}
                </select>
                <div class="select-arrow">▼</div>
                <div class="select-bottom-bar"></div>
              </div>
              
              {#if selectedPlayer1}
                <div class="selected-indicator">
                  <div class="indicator-dot active"></div>
                  <span class="indicator-text">OPERATIVE CONFIRMED</span>
                  <input type="hidden" name="player1Name" value={selectedPlayer1.username} />
                </div>
              {:else}
                <div class="selected-indicator">
                  <div class="indicator-dot"></div>
                  <span class="indicator-text">AWAITING SELECTION</span>
                </div>
              {/if}
            </div>
          </div>
        </div>

        <!-- VS Divider -->
        <div class="vs-divider">
          <div class="vs-line top"></div>
          <div class="vs-container">
            <div class="vs-text">VS</div>
            <div class="vs-cyrillic">ПРОТИВ</div>
            <div class="vs-pulse"></div>
          </div>
          <div class="vs-line bottom"></div>
        </div>

        <!-- Player 2 Selection -->
        <div class="combatant-panel right-panel">
          <div class="panel-header">
            <div class="panel-title">
              <span class="panel-number">02</span>
              <span class="panel-label">COMBATANT BETA</span>
            </div>
            <span class="cyrillic-hint">ВТОРОЙ ИГРОК</span>
          </div>
          
          <div class="selection-area">
            <div class="input-wrapper">
              <div class="select-header">
                <span class="select-label">SELECT UNIT</span>
                <span class="select-cyrillic">ВЫБОР</span>
              </div>
              <div class="custom-select">
                <select name="player2Id" required on:change={handlePlayer2Change} class="terminal-select">
                  <option value="">-- SELECT OPERATIVE --</option>
                  {#each data.players as p}
                    <option value={p.id}>{p.username}</option>
                  {/each}
                </select>
                <div class="select-arrow">▼</div>
                <div class="select-bottom-bar"></div>
              </div>
              
              {#if selectedPlayer2}
                <div class="selected-indicator">
                  <div class="indicator-dot active"></div>
                  <span class="indicator-text">OPERATIVE CONFIRMED</span>
                  <input type="hidden" name="player2Name" value={selectedPlayer2.username} />
                </div>
              {:else}
                <div class="selected-indicator">
                  <div class="indicator-dot"></div>
                  <span class="indicator-text">AWAITING SELECTION</span>
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>

      <!-- Winner Selection -->
      <div class="winner-section">
        <div class="section-header">
          <h3 class="glitch-text-small" data-text="VICTORY PROTOCOL">VICTORY PROTOCOL</h3>
          <div class="section-subtitle">
            <span class="cyrillic-subtitle">ПОБЕДИТЕЛЬ</span>
            <div class="status-led"></div>
          </div>
        </div>
        
        <div class="radio-group">
          <div class="radio-row">
            <label class="radio-label">
              <input type="radio" name="winner" value="player1" required class="hidden-radio">
              <div class="radio-custom">
                <div class="radio-outer">
                  <div class="radio-inner"></div>
                </div>
                <div class="radio-content">
                  <span class="radio-text">COMBATANT ALPHA</span>
                  <span class="radio-cyrillic">АЛЬФА</span>
                </div>
              </div>
              <div class="radio-glow"></div>
            </label>
            
            <label class="radio-label">
              <input type="radio" name="winner" value="player2" required class="hidden-radio">
              <div class="radio-custom">
                <div class="radio-outer">
                  <div class="radio-inner"></div>
                </div>
                <div class="radio-content">
                  <span class="radio-text">COMBATANT BETA</span>
                  <span class="radio-cyrillic">БЕТА</span>
                </div>
              </div>
              <div class="radio-glow"></div>
            </label>
          </div>
        </div>
      </div>

      <div class="execute-section">
        <button type="submit" class="combat-button">
          <span class="button-main-text">EXECUTE SIMULATION</span>
          <span class="button-sub-text">BEGIN MATCH SEQUENCE</span>
          <span class="button-cyrillic">НАЧАТЬ БОЙ</span>
          <div class="button-pulse"></div>
          <div class="button-sparks">
            <span class="spark"></span>
            <span class="spark"></span>
            <span class="spark"></span>
          </div>
        </button>
      </div>
    </form>
  </main>

  <div class="terminal-footer">
    <div class="status-bar">
      <span class="status-text">SIMULATION STATUS: READY</span>
      <span class="status-light pulse"></span>
      <span class="status-text">COMBATANTS: {data.players.length} AVAILABLE</span>
      <span class="status-light pulse"></span>
      <span class="status-text">SYSTEM: ARENA MODE</span>
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

  .match-header {
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

  .combat-form {
    position: relative;
    z-index: 2;
  }

  .combat-interface {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-bottom: 50px;
  }

  .combatant-panel {
    flex: 1;
    max-width: 400px;
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.9) 0%,
        rgba(28, 21, 8, 0.9) 100%
      ),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238b7355' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
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
    box-shadow: 
      inset 0 0 30px rgba(0, 0, 0, 0.7),
      0 5px 15px rgba(0, 0, 0, 0.5);
    min-height: 250px;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(139, 115, 85, 0.3);
  }

  .panel-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .panel-number {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
    color: #8b7355;
    text-shadow: 0 0 5px rgba(139, 115, 85, 0.5);
  }

  .panel-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 1em;
    color: #c9b68a;
    letter-spacing: 2px;
  }

  .cyrillic-hint {
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .selection-area {
    margin-top: 20px;
  }

  .input-wrapper {
    position: relative;
  }

  .select-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .select-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .select-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
  }

  .custom-select {
    position: relative;
    margin-bottom: 20px;
  }

  .terminal-select {
    width: 100%;
    background: rgba(10, 8, 5, 0.8);
    border: 2px solid #5d4a2e;
    border-top: 2px solid #8b7355;
    border-left: 2px solid #8b7355;
    color: #c9b68a;
    padding: 15px 40px 15px 15px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.1em;
    letter-spacing: 1px;
    appearance: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .terminal-select:focus {
    outline: none;
    border-color: #c9b68a;
    box-shadow: 0 0 15px rgba(201, 182, 138, 0.3);
    background: rgba(20, 16, 10, 0.9);
  }

  .terminal-select option {
    background: #2a1a0c;
    color: #c9b68a;
    padding: 10px;
  }

  .select-arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #8b7355;
    font-size: 0.8em;
    pointer-events: none;
  }

  .select-bottom-bar {
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      #8b7355,
      #c9b68a,
      #8b7355
    );
    opacity: 0.5;
  }

  .selected-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-left: 3px solid #8b7355;
  }

  .indicator-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #5d4a2e;
  }

  .indicator-dot.active {
    background: #5aff7a;
    box-shadow: 0 0 10px #5aff7a;
    animation: pulse 2s infinite;
  }

  .indicator-text {
    font-size: 0.9em;
    color: #8b7355;
    letter-spacing: 1px;
  }

  .vs-divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  .vs-line {
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, 
      transparent,
      #8b7355,
      transparent
    );
  }

  .vs-line.top {
    margin-bottom: 15px;
  }

  .vs-line.bottom {
    margin-top: 15px;
  }

  .vs-container {
    position: relative;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #3d2e1a, #2a1a0c);
    border: 3px solid #8b7355;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .vs-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
    color: #ff5a5a;
    text-shadow: 0 0 10px rgba(255, 90, 90, 0.5);
    letter-spacing: 2px;
  }

  .vs-cyrillic {
    font-size: 0.7em;
    color: #8b7355;
    margin-top: 2px;
  }

  .vs-pulse {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid #ff5a5a;
    animation: vs-pulse 2s infinite;
    opacity: 0.5;
  }

  @keyframes vs-pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }

  .winner-section {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.7) 0%,
        rgba(28, 21, 8, 0.7) 100%
      );
    border: 3px solid #8b7355;
    padding: 25px;
    margin-bottom: 30px;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(139, 115, 85, 0.3);
  }

  .glitch-text-small {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.3em;
    color: #c9b68a;
    text-shadow: 
      1px 1px 0 #8b7355,
      -1px -1px 0 #5d4a2e;
    letter-spacing: 2px;
    position: relative;
  }

  .section-subtitle {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .status-led {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffd95a;
    box-shadow: 0 0 10px #ffd95a;
    animation: pulse 1.5s infinite;
  }

  .radio-group {
    margin-top: 20px;
  }

  .radio-row {
    display: flex;
    justify-content: center;
    gap: 40px;
  }

  .radio-label {
    position: relative;
    cursor: pointer;
    flex: 1;
    max-width: 200px;
  }

  .hidden-radio {
    position: absolute;
    opacity: 0;
  }

  .radio-custom {
    display: flex;
    align-items: center;
    gap: 15px;
    background: rgba(10, 8, 5, 0.8);
    border: 2px solid #5d4a2e;
    padding: 15px 20px;
    transition: all 0.3s ease;
  }

  .hidden-radio:checked + .radio-custom {
    border-color: #c9b68a;
    box-shadow: 0 0 15px rgba(201, 182, 138, 0.3);
    background: rgba(20, 16, 10, 0.9);
  }

  .hidden-radio:checked + .radio-custom .radio-inner {
    background: #c9b68a;
    box-shadow: 0 0 10px #c9b68a;
  }

  .radio-outer {
    width: 20px;
    height: 20px;
    border: 2px solid #8b7355;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .radio-inner {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
    transition: all 0.3s ease;
  }

  .radio-content {
    display: flex;
    flex-direction: column;
  }

  .radio-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 1px;
  }

  .radio-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
    margin-top: 2px;
  }

  .radio-glow {
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

  .radio-label:hover .radio-glow {
    left: 100%;
  }

  .execute-section {
    text-align: center;
    margin-top: 40px;
  }

  .combat-button {
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
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    overflow: hidden;
  }

  .combat-button:hover {
    background: linear-gradient(45deg, #8b7355, #5d4a2e);
    border-color: #ff5a5a;
    box-shadow: 0 0 30px rgba(255, 90, 90, 0.4);
  }

  .combat-button:active {
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

  .button-pulse {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid #ff5a5a;
    animation: vs-pulse 2s infinite;
    opacity: 0;
  }

  .combat-button:hover .button-pulse {
    opacity: 0.7;
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
    background: linear-gradient(to bottom, transparent, #ffd95a, transparent);
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

  .status-light.pulse {
    animation: pulse 2s infinite;
  }
</style>