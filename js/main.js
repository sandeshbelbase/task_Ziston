$('.slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    speed: 300,
    autoplay: true,
    prevArrow: '<i  class="far fa-arrow-left previous_arrow"></i>',
    nextArrow: '<i  class="far fa-arrow-right  next_arrow"></i>',
  });

  $('.place_slider').slick({
  infinite: true,
  slidesToShow: 4,
  // dots: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 200,
  prevArrow: null,
  nextArrow: null
});

$('.latest_slider').slick({
  infinite: true,
  slidesToShow: 3,
  // dots: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 900,
  prevArrow: null,
  nextArrow: null
});

$('.brand_slider').slick({
  infinite: true,
  slidesToShow: 5,
  // dots: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 400,
  prevArrow: null,
  nextArrow: null
});

$('.testimonial').slick({
  infinite: true,
  slidesToShow: 2,
  // dots: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 400,
  prevArrow: null,
  nextArrow: null
});

//ANimation part
window.addEventListener("scroll", function () {
  let menu_bar = document.querySelector(".head_wrap");
  let windowPosition = window.scrollY > 90;
  let windowPos = window.scrollY < 90;
  menu_bar.classList.toggle("scrolling-active", windowPosition);
  menu_bar.classList.toggle("scrolling-deactive", windowPos);
});