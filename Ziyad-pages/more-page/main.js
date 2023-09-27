AOS.init();

document.addEventListener('scroll', function () {
    const navimg = document.getElementById("navimg")
    const nav = document.querySelector('nav');
    const loginBtn = document.querySelector('.login button');
    const links = document.querySelectorAll('.nav-link')

    if (window.scrollY > 25 ) {
        navimg.src = '/Sultan_pages/IMG/logo.png';
        nav.classList.add('bg-white');
        loginBtn.classList.add('scrolled');
        links.forEach(link => {
            link.classList.remove('text-white');
        });

    } else {
        navimg.src = '/Sultan_pages/IMG/logo2.png';
        nav.classList.remove('bg-white');
        loginBtn.classList.remove('scrolled');
        links.forEach(link => {
            link.classList.add('text-white');
        });
    }
})

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});