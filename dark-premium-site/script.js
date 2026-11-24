const ageNotice = document.getElementById('ageNotice');
const confirmAge = document.getElementById('confirmAge');
const leaveSite = document.getElementById('leaveSite');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (sessionStorage.getItem('adultConfirmed') === 'yes') {
  ageNotice.classList.add('hidden');
}
confirmAge.addEventListener('click', () => {
  sessionStorage.setItem('adultConfirmed', 'yes');
  ageNotice.classList.add('hidden');
});
leaveSite.addEventListener('click', () => {
  window.location.href = 'https://www.google.com/';
});
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
