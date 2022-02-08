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