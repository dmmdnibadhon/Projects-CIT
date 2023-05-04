$('.popular_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
  });
// Counter part start
$('.count').counterUp({
  delay: 10,
  time: 1000
});
// Counter part end
// Testimonial slider start 
$('.testi_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
});
// Testimonial slider end