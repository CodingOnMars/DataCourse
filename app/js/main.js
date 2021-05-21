$(function () {
    // Hamburger icon
    $(".menu-btn").on("click", function () {
        $(".header__menu-list").toggleClass("header__menu-list--active");
        $(".header__logo").toggleClass("header__logo--hide");
    });

    // Reviews slider

    $('.reviews__items').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 508,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplaySpeed: 3000,
                }
            }
        ]
    });
})