document.addEventListener('scroll', function () {
    const navimg = document.getElementById("navimg")
    const nav = document.querySelector('nav');
    const loginBtn = document.querySelector('.login button');
    const links = document.querySelectorAll('.nav-link')

    if (window.scrollY > 150) {
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

window.addEventListener('load', function () {
    const titles = [
        ' بيج ماك®',
        'بيج تايستي تشيكن',
        'تشيكن برجر',
        'كرنشي تشيكن',
        'جراند تشيكن سبيشال ',
        'ماك تشيكن®',



    ];


    const subtitles = [
        'منتج حامل اكواب متوفر ب الوان عديد ومتناسقه مع الرواشين ',
        ' .!   وسام او ميداليه تستطيع وضعها كزينه او منظر',
        ' منتج ثلاثي ابعاد لتبسيط المنتج ورؤية المنتج ب شكل افضل  ',
        ' استكرات تجميليه لجعل منتجات اكثر تألق  ',
        ' لوحات اثريه تعطي طابع اثري قديم ',
        ' مثل العود والطبول والآلات الموسيقية التي تستخدم في العروض التقليدي  ',



    ];

    for (let i = 1; i <= 6; i++) {
        if (i % 6 === 1) {
            rowContainer = document.getElementById('cards');
        }

        let cardContainer = document.createElement('div');
        cardContainer.className = 'card';

        let basket = document.createElement('div');
        basket.className = 'card-basket';

        let like = document.createElement('i')
        like.className = 'bi bi-bookmark-heart'

        let liked = document.createElement('i')
        liked.className = 'bi bi-bookmark-heart-fill'

        like.addEventListener('click', function () {
            Swal.fire({
                icon: "success",
                title: "تمت إضافة الاثر إلى المفضلة بنجاح!",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
              });

            basket.removeChild(like)
            basket.appendChild(liked)
        })

        liked.addEventListener('click', function () {
            Swal.fire({
                icon: "success",
                title: "تمت إزالة الاثر من المفضلة بنجاح!",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
              });
            basket.appendChild(like)
            basket.removeChild(liked)
        })

        let cardImage = document.createElement('div');
        cardImage.className = 'card-img';

        let cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';
        cardTitle.textContent = titles[i % 6];

        let cardSubtitle = document.createElement('div');
        cardSubtitle.className = 'card-subtitle';
        cardSubtitle.textContent = subtitles[i - 1];


        cardContainer.appendChild(cardImage);
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardSubtitle);
        cardContainer.appendChild(basket);

        basket.appendChild(like);

        rowContainer.appendChild(cardContainer);

    }
})