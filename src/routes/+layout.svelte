<!-- src/routes/+layout.svelte -->
<script>
	import { redirect } from '@sveltejs/kit';

  export let data; 
</script>

<nav class="main-nav">
  <div class="nav-left">
    <a href="/">Home</a>
    <!-- Din uppgift: Visa olika navigation beroende på om användaren är inloggad -->
    {#if data.user}
      <a href="/dashboard">Dashboard</a>
      <a href="/games">Games</a>
      <a href="/characters">Characters</a>
    {/if}
  </div>
  
  <div class="nav-right">
    <!-- Din uppgift: Implementera conditional navigation -->
    {#if data.user}
      <span>{data.user.username.toUpperCase()}</span>
      <!-- Logout-knapp som anropar logout action -->
      <form method="POST" action="/login?/logout" style="display: inline;">
        <button type="submit">Log out</button>
      </form>
    {:else}
      <a href="/login">Log in</a>
      <a href="/login">Register</a>
      
    {/if}
  </div>
</nav>

<main>
  <slot />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700&display=swap');

  .main-nav {
    background: 
      linear-gradient(135deg, 
        rgba(45, 35, 20, 0.95) 0%,
        rgba(28, 21, 8, 0.95) 100%
      ),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238b7355' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    border-bottom: 4px solid;
    border-image: 
      linear-gradient(
        90deg,
        #8b7355,
        #5d4a2e,
        #3d2e1a,
        #5d4a2e,
        #8b7355
      ) 1;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    box-shadow: 
      0 5px 20px rgba(0, 0, 0, 0.5),
      inset 0 0 30px rgba(0, 0, 0, 0.7);
    font-family: 'Share Tech Mono', monospace;
  }

  .main-nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent,
      rgba(139, 115, 85, 0.8),
      rgba(201, 182, 138, 0.8),
      rgba(139, 115, 85, 0.8),
      transparent
    );
    animation: scan-nav 3s linear infinite;
  }

  @keyframes scan-nav {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .main-nav::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.9em;
    color: rgba(139, 115, 85, 0.2);
    letter-spacing: 3px;
    white-space: nowrap;
    z-index: 0;
  }

  .nav-left, .nav-right {
    display: flex;
    align-items: center;
    gap: 25px;
    position: relative;
    z-index: 1;
  }

  .main-nav a {
    color: #c9b68a;
    text-decoration: none;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 8px 15px;
    border: 2px solid transparent;
    background: rgba(10, 8, 5, 0.5);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .main-nav a::before {
    content: '';
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

  .main-nav a:hover {
    color: #ffd95a;
    border-color: #8b7355;
    background: rgba(45, 35, 20, 0.8);
  }

  .main-nav a:hover::before {
    left: 100%;
  }

  .main-nav span {
    color: #c9b68a;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8em;
    letter-spacing: 1px;
    padding: 8px 15px;
    background: rgba(10, 8, 5, 0.5);
    border-left: 2px solid #8b7355;
    border-right: 2px solid #8b7355;
    position: relative;
  }

  .main-nav span::before {
    content: '▶';
    color: #8b7355;
    margin-right: 8px;
  }

  form {
    margin: 0;
  }

  .main-nav button {
    background: linear-gradient(45deg, #3d2e1a, #2a1a0c);
    border: 2px solid #8b7355;
    color: #c9b68a;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 8px 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .main-nav button:hover {
    border-color: #ff5a5a;
    color: #ff5a5a;
    box-shadow: 0 0 15px rgba(255, 90, 90, 0.3);
  }

  .main-nav button::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent,
      rgba(255, 90, 90, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  .main-nav button:hover::after {
    left: 100%;
  }

  main {
    padding: 0;
    background: 
      radial-gradient(circle at 20% 50%, #2a1a0c 0%, #1a0f05 70%),
      linear-gradient(45deg, #0c0c0c 25%, transparent 25%),
      linear-gradient(-45deg, #0c0c0c 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #0c0c0c 75%),
      linear-gradient(-45deg, transparent 75%, #0c0c0c 75%);
    background-size: 100% 100%, 40px 40px, 40px 40px, 40px 40px, 40px 40px;
    background-position: 0 0, 0 0, 20px 0, 20px -20px, 0px 20px;
    min-height: calc(100vh - 68px);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .main-nav {
      flex-direction: column;
      gap: 15px;
      padding: 15px;
    }

    .nav-left, .nav-right {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    .main-nav::after {
      font-size: 0.7em;
      letter-spacing: 2px;
    }
  }
  .nav-right span{
    font-size: 1em;
    text-shadow: 0 0 10px #ffc400;
  }
</style>