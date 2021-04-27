$(function () {

  $("#phone").inputmask("+7(999) 999-9999")

  $('.header__btn, .menu').on('click', function () {
    $('.header__btn').toggleClass('header__btn--active');
    $('.menu').toggleClass('menu--active');
  });


});