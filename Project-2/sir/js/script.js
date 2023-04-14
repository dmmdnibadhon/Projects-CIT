$(function(){
  $('.dest_slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
  });


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  
  $('.explore_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    dots: true,
  });


  $('.test_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  });
})