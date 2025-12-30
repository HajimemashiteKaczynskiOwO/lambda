<script>
  export let form; // För att visa fel-meddelanden från servern
  import {enhance} from '$app/forms';

  let loading = false;
</script>

<div class="terminal-container">
  <div class="console-header">
    <div class="console-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <div class="console-title">CITY 17 IDENT PROTOCOL v2.5</div>
    <div class="cyrillic-label">ИДЕНТИФИКАЦИЯ</div>
  </div>

  <main class="main-frame">
    <div class="scan-line"></div>
    
    <div class="login-section">
      <h1 class="glitch-text" data-text="ACCESS REQUEST">ACCESS REQUEST</h1>
      
      <form method="POST" 
      action="?/login" 
      class="panel rusty-panel"
      use:enhance={() => {
    // Din uppgift: Vad ska hända när form submits?
    loading = true;
    return async ({ result, update }) => {
      loading = false;
      await update();
    };
  }}
>
        <div class="input-group">
          <div class="label-row">
            <label for="username" class="flicker-label">USERNAME:</label>
            <span class="cyrillic-hint">ПОЛЬЗОВАТЕЛЬ</span>
          </div>
          <div class="input-wrapper">
            <span class="input-prefix">></span>
            <input 
              id="username"
              type="text" 
              name="username"
              required
              placeholder="ENTER CITIZEN ID"
              class="terminal-input"
            />
            <div class="input-bottom-bar"></div>
          </div>
        </div>
        
        <div class="input-group">
          <div class="label-row">
            <label for="password" class="flicker-label">PASSWORD:</label>
            <span class="cyrillic-hint">ПАРОЛЬ</span>
          </div>
          <div class="input-wrapper">
            <span class="input-prefix">#</span>
            <input 
              id="password"
              type="password" 
              name="password"
              required
              placeholder="••••••••••"
              class="terminal-input"
            />
            <div class="input-bottom-bar"></div>
          </div>
        </div>
        
        <button type="submit" class="rusty-button"
          disabled={loading}>
          <span class="button-text">{loading ? 'LOGGING IN...' : 'LOG IN'}</span>
          <span class="button-cyrillic">ВХОД</span>
          <div class="button-glow"></div>
        </button>
      </form>
    </div>

    <div class="divider">
      <div class="line"></div>
      <div class="divider-text">NEW IDENTIFICATION</div>
      <div class="line"></div>
    </div>

    <div class="register-section">
      <h2 class="glitch-text" data-text="NEW CITIZEN REGISTRATION">NEW CITIZEN REGISTRATION</h2>
      
      <form method="POST" action="?/register" class="panel rusty-panel">
        <div class="input-group">
          <div class="label-row">
            <label for="new-username" class="flicker-label">NEW USERNAME:</label>
            <span class="cyrillic-hint">НОВЫЙ ПОЛЬЗОВАТЕЛЬ</span>
          </div>
          <div class="input-wrapper">
            <span class="input-prefix">></span>
            <input 
              id="new-username"
              type="text" 
              name="new-username"
              required
              placeholder="ASSIGN CITIZEN ID"
              class="terminal-input"
            />
            <div class="input-bottom-bar"></div>
          </div>
        </div>
        
        <div class="input-group">
          <div class="label-row">
            <label for="new-password" class="flicker-label">NEW PASSWORD:</label>
            <span class="cyrillic-hint">НОВЫЙ ПАРОЛЬ</span>
          </div>
          <div class="input-wrapper">
            <span class="input-prefix">#</span>
            <input 
              id="new-password"
              type="password" 
              name="new-password"
              required
              placeholder="••••••••••"
              class="terminal-input"
            />
            <div class="input-bottom-bar"></div>
          </div>
        </div>
        
        <button type="submit" class="rusty-button">
          <span class="button-text">INITIALIZE REGISTRATION</span>
          <span class="button-cyrillic">РЕГИСТРАЦИЯ</span>
          <div class="button-glow"></div>
        </button>
      </form>
    </div>

    {#if form?.error}
      <div class="error-panel">
        <div class="error-header">
          <span class="error-icon">⚠</span>
          <span class="error-title">SYSTEM ALERT</span>
        </div>
        <div class="error-message">{form.error}</div>
        <div class="error-cyrillic">ОШИБКА СИСТЕМЫ</div>
      </div>
    {/if}
  </main>

  <div class="terminal-footer">
    <div class="status-bar">
      <span class="status-text">SYSTEM: ONLINE</span>
      <span class="status-light active"></span>
      <span class="status-text">DATASTREAM: ENCRYPTED</span>
      <span class="status-light active"></span>
      <span class="status-text">CITY 17 NETWORK</span>
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
    max-width: 800px;
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

  .login-section, .register-section {
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
  }

  .glitch-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8em;
    color: #c9b68a;
    text-shadow: 
      2px 2px 0 #8b7355,
      -1px -1px 0 #5d4a2e,
      0 0 10px rgba(201, 182, 138, 0.3);
    margin-bottom: 25px;
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

  .panel {
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
    margin-bottom: 20px;
    position: relative;
    box-shadow: 
      inset 0 0 30px rgba(0, 0, 0, 0.7),
      0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .rusty-panel::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 1px solid rgba(139, 115, 85, 0.2);
    pointer-events: none;
  }

  .input-group {
    margin-bottom: 25px;
  }

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .flicker-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    color: #c9b68a;
    letter-spacing: 1px;
    text-transform: uppercase;
    animation: flicker 3s infinite;
  }

  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
    51% { opacity: 0.2; }
    52% { opacity: 0.8; }
  }

  .cyrillic-hint {
    font-size: 0.8em;
    color: #8b7355;
    letter-spacing: 0.5px;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
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

  .rusty-button {
    position: relative;
    background: linear-gradient(to bottom, #5d4a2e, #3d2e1a);
    border: 3px solid #8b7355;
    border-top-color: #c9b68a;
    border-left-color: #c9b68a;
    color: #c9b68a;
    padding: 15px 30px;
    font-family: 'Orbitron', sans-serif;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
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

  .rusty-button:hover {
    background: linear-gradient(to bottom, #8b7355, #5d4a2e);
    border-color: #c9b68a;
    box-shadow: 0 0 20px rgba(201, 182, 138, 0.4);
  }

  .rusty-button:active {
    transform: translateY(2px);
    border-color: #5d4a2e;
  }

  .button-text {
    z-index: 2;
  }

  .button-cyrillic {
    font-size: 0.8em;
    color: #8b7355;
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
      rgba(201, 182, 138, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  .rusty-button:hover .button-glow {
    left: 100%;
  }

  .divider {
    display: flex;
    align-items: center;
    margin: 40px 0;
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
    font-size: 0.9em;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .error-panel {
    background: linear-gradient(135deg, 
      rgba(65, 25, 20, 0.9) 0%,
      rgba(40, 15, 12, 0.9) 100%
    );
    border: 3px solid #8b2e2a;
    padding: 20px;
    margin-top: 30px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { border-color: #8b2e2a; }
    50% { border-color: #ff5a5a; }
  }

  .error-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .error-icon {
    color: #ff5a5a;
    font-size: 1.5em;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .error-title {
    font-family: 'Orbitron', sans-serif;
    color: #ff9a8a;
    font-size: 1.2em;
    letter-spacing: 2px;
  }

  .error-message {
    color: #ffc9c2;
    font-size: 1em;
    margin-bottom: 10px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);
    border-left: 3px solid #ff5a5a;
  }

  .error-cyrillic {
    color: #8b2e2a;
    font-size: 0.9em;
    text-align: right;
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
    background: #5d4a2e;
  }

  .status-light.active {
    background: #5aff7a;
    box-shadow: 0 0 10px #5aff7a;
    animation: pulse-light 2s infinite;
  }

  @keyframes pulse-light {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
</style>