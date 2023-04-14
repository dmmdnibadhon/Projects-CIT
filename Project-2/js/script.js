$('.slider_items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
  });

  // Counter-plugin start
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
  // Counter-plugin end
// Testimonial slider start 
$('.testi_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
});
// Testimonial slider end