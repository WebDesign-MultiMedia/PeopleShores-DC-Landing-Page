const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const openIcon = document.getElementById('icon-open');
const closeIcon = document.getElementById('icon-close');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});