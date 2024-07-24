$(document).ready(function () {
    AOS.init();
    $(".all_search_input").hide();
    const menuItems = document.querySelectorAll('#gnbmenuids > li');

    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            // Prevent the default anchor click behavior
            event.preventDefault();

            // Remove the 'active2' class from all items
            menuItems.forEach(el => el.classList.remove('active2'));

            // Add the 'active2' class to the clicked item
            this.classList.add('active2');
        });
    });
    const spotlight_swiper = new Swiper('.spotlight-swiper', {
        slidesPerView: 4,
        initialSlide: 0,
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '#slider-next4',
            prevEl: '#slider-prev4',
        },
    });

    const mmedia_swiper = new Swiper('.mmedia-swiper', {
        slidesPerView: 4,
        initialSlide: 0,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '#slider-next3',
            prevEl: '#slider-prev3',
        },
    });

    const poster_swiper = new Swiper('.poster-swiper', {
        slidesPerView: 7,
        initialSlide: 0,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '#slider-next2',
            prevEl: '#slider-prev2',
        },
    });
}
)