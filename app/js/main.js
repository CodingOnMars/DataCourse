$(function () {
    // Hamburger icon
    $(".menu-btn").on("click", function () {
        $(".header__menu-list").toggleClass("header__menu-list--active");
        $(".header__logo").toggleClass("header__logo--hide");
    });

    // Jobs slider

    $('.jobs__items').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1441,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1102,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 882,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 682,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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


    // Reviews slider

    $('.reviews__items').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 6000,
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