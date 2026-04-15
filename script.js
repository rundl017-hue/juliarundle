document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('current-year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
});
