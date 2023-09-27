document.addEventListener('scroll', function () {
    const navimg = document.getElementById("navimg")
    const nav = document.querySelector('nav');
    const loginBtn = document.querySelector('.login button');
    const links = document.querySelectorAll('.nav-link')
  
    if (window.scrollY > 25) {
      navimg.src = '/Sultan_pages/IMG/logo2.png';
      nav.classList.add('bg-hijrah2');
      nav.classList.remove('bg-hijrah');
      loginBtn.classList.add('scrolled');
      links.forEach(link => {
        link.classList.remove('text-white');
      });
  
    } else {
      navimg.src = '/Sultan_pages/IMG/logo.png';
      nav.classList.remove('bg-hijrah2');
      nav.classList.add('bg-hijrah');
      loginBtn.classList.remove('scrolled');
      links.forEach(link => {
        link.classList.add('text-white');
      });
    }
  })