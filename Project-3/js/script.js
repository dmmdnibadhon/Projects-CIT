// Filter-plugin start
var mixer = mixitup('.filter_plugin');
// Filter-plugin end


// Progressbar part start
$(document).ready(function(){
    $(".progress-bar").ProgressBar();
  });
// Progressbar part end

// Slick slider start
$('.testimonial_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
});
// Slick slider end