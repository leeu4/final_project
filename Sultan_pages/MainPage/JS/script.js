document.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    const loginBtn = document.querySelector('.login button');
    const links = document.querySelectorAll('.nav-link')

    if (window.scrollY > 150) {
        nav.classList.add('bg-white');
        loginBtn.classList.add('scrolled');
        links.forEach(link => {
            link.classList.remove('text-white');
        });
        
    } else {
        nav.classList.remove('bg-white');
        loginBtn.classList.remove('scrolled');
        links.forEach(link => {
            link.classList.add('text-white');
        });
    }
})