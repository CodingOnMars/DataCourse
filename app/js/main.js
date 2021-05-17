$(function () {
    // Hamburger icon
    $(".menu-btn").on("click", function () {
        $(".header__menu-list").toggleClass("header__menu-list--active");
        $(".header__logo").toggleClass("header__logo--hide");
    });
})