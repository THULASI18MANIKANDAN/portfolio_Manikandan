(function() {
  function getStoredTheme() {
    try { return localStorage.getItem('theme'); } catch(e) { return null; }
  }
  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') return stored;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch(e) {}
    updateToggle(theme);
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }
  function updateToggle(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // Ensure theme attribute exists
    setTheme(getPreferredTheme());
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);

    // Respect system theme changes when user hasn't chosen explicitly
    try {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      media.addEventListener('change', e => {
        const stored = getStoredTheme();
        if (!stored) setTheme(e.matches ? 'dark' : 'light');
      });
    } catch (e) {}
  });
})();