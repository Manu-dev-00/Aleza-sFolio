document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');
  const body   = document.body;

  // Appliquer thème sauvegardé
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    icon.className = 'bi bi-sun-fill';
  } else {
    icon.className = 'bi bi-moon-fill';
  }

  toggle.addEventListener('click', function () {
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
      icon.className = 'bi bi-sun-fill';
      localStorage.setItem('theme', 'light');
    } else {
      icon.className = 'bi bi-moon-fill';
      localStorage.setItem('theme', 'dark');
    }
  });
});