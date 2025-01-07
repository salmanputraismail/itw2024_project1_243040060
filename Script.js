const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Tampilkan/Sembunyikan menu
  hamburgerMenu.classList.toggle('open'); // Tambahkan efek animasi
});
