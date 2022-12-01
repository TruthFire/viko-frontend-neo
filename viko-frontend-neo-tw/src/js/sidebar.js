document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const sidebar = document.getElementById('sidebar');
  const btnSidebarToggler = document.getElementById('btnSidebarToggler');
  const navClosed = document.getElementById('navClosed');
  const navOpen = document.getElementById('navOpen');
  const blurBg = document.getElementById('blurredBg');
  const content = document.getElementById('content');

  if (window.screen.width >= 1024) {
    sidebar.classList.add('show');
    navClosed.classList.toggle('hidden');
    navOpen.classList.toggle('hidden');
  }

  blurBg.addEventListener('click', () => {
    sidebar.classList.remove('show');
    navClosed.classList.toggle('hidden');
    navOpen.classList.toggle('hidden');
    blurBg.classList.toggle('hidden');
  });

  window.addEventListener(
    'resize',
    function (event) {
      if (window.innerWidth >= 1024) {
        sidebar.classList.add('show');
        navClosed.classList.add('hidden');
        navOpen.classList.remove('hidden');
      }
      if (window.innerWidth < 1024) {
        sidebar.classList.remove('show');
        navClosed.classList.remove('hidden');
        navOpen.classList.add('hidden');
        blurBg.classList.add('hidden');
      }
    },
    true
  );

  btnSidebarToggler.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('show');
    navClosed.classList.toggle('hidden');
    navOpen.classList.toggle('hidden');
    blurBg.classList.toggle('hidden');
    if (window.screen.width >= 1024) {
      content.classList.toggle('lg:ml-[200px]');
    }
  });

  sidebar.style.top = parseInt(navbar.clientHeight) - 1 + 'px';
});

if (localStorage.theme === 'dark' ) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

function switchTheme() {
  localStorage.theme == 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
  document.documentElement.classList.toggle('dark')
}