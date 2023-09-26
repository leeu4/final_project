document.addEventListener('scroll', function () {
  const navimg = document.getElementById("navimg")
  const nav = document.querySelector('nav');
  const loginBtn = document.querySelector('.login button');
  const links = document.querySelectorAll('.nav-link')

  if (window.scrollY > 25) {
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

axios
  .get("https://64fdc851596493f7af7e8ffe.mockapi.io/api/v1/legacy")
  .then((response) => {
    const api = response.data;
    const apiTable = document.getElementById("cards");

    api.forEach((result) => {
      const card = document.createElement("div");
      card.className = "card"
      card.innerHTML = `
                  <div class="card-basket" onclick="addToFavorites('${result.id}', '${result.image}', '${result.title}', '${result.subtitle}')"><i class="bi bi-bookmark-heart"></i></div>
                  <div class="card-img" style="background: url(${result.image}) no-repeat; background-position: center; background-size: cover;"></div>
                  <div class="card-title">${result.title}</div>
                  <div class="card-subtitle">${result.subtitle}</div>
      `;
      apiTable.appendChild(card);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

function addToFavorites(id, image, title, subtitle) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isDuplicate = favorites.some((item) => item.id === id);

  if (!isDuplicate) {
    const favoriteItem = {
      id,
      image,
      title,
      subtitle,
    };

    favorites.push(favoriteItem);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    Swal.fire({
      icon: "success",
      title: "تمت إضافة الصورة إلى المفضلة بنجاح!",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
  } else {
    Swal.fire({
      icon: "info",
      title: "الصورة موجودة بالفعل في المفضلة!",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
  }
}


// window.addEventListener('load', function () {
//     const titles = [
//         ' بيج ماك®',
//         'بيج تايستي تشيكن',
//         'تشيكن برجر',
//         'كرنشي تشيكن',
//         'جراند تشيكن سبيشال ',
//         'ماك تشيكن®',



//     ];


//     const subtitles = [
//         'منتج حامل اكواب متوفر ب الوان عديد ومتناسقه مع الرواشين ',
//         ' .!   وسام او ميداليه تستطيع وضعها كزينه او منظر',
//         ' منتج ثلاثي ابعاد لتبسيط المنتج ورؤية المنتج ب شكل افضل  ',
//         ' استكرات تجميليه لجعل منتجات اكثر تألق  ',
//         ' لوحات اثريه تعطي طابع اثري قديم ',
//         ' مثل العود والطبول والآلات الموسيقية التي تستخدم في العروض التقليدي  ',



//     ];

//     for (let i = 1; i <= 6; i++) {
//         if (i % 6 === 1) {
//             rowContainer = document.getElementById('cards');
//         }

//         let cardContainer = document.createElement('div');
//         cardContainer.className = 'card';

//         let basket = document.createElement('div');
//         basket.className = 'card-basket';

//         let like = document.createElement('i')
//         like.className = 'bi bi-bookmark-heart'

//         let liked = document.createElement('i')
//         liked.className = 'bi bi-bookmark-heart-fill'

//         like.addEventListener('click', function () {
//             Swal.fire({
//                 icon: "success",
//                 title: "تمت إضافة الاثر إلى المفضلة بنجاح!",
//                 showConfirmButton: false,
//                 timer: 1000,
//                 timerProgressBar: true,
//               });

//             basket.removeChild(like)
//             basket.appendChild(liked)
//         })

//         liked.addEventListener('click', function () {
//             Swal.fire({
//                 icon: "success",
//                 title: "تمت إزالة الاثر من المفضلة بنجاح!",
//                 showConfirmButton: false,
//                 timer: 1000,
//                 timerProgressBar: true,
//               });
//             basket.appendChild(like)
//             basket.removeChild(liked)
//         })

//         let cardImage = document.createElement('div');
//         cardImage.className = 'card-img';

//         let cardTitle = document.createElement('div');
//         cardTitle.className = 'card-title';
//         cardTitle.textContent = titles[i % 6];

//         let cardSubtitle = document.createElement('div');
//         cardSubtitle.className = 'card-subtitle';
//         cardSubtitle.textContent = subtitles[i - 1];

//         cardContainer.appendChild(basket);

//         basket.appendChild(like);


//         cardContainer.appendChild(cardImage);
//         cardContainer.appendChild(cardTitle);
//         cardContainer.appendChild(cardSubtitle);

//         rowContainer.appendChild(cardContainer);

//     }
// })