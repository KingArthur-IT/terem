$(document).ready(function(){
    $('.designers-projects-slider__wrapper').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.designers-projects-slider__left-arrow'),
        nextArrow: $('.designers-projects-slider__right-arrow'),
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
});

$(document).ready(function(){
    $('.designers-slider__wrapper').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.designers-slider__left-arrow'),
        nextArrow: $('.designers-slider__right-arrow'),
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
});

$(document).ready(function(){
  $('.dilers-consept-slider__wrapper').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.dilers-consept-slider__left-arrow'),
      nextArrow: $('.dilers-consept-slider__right-arrow'),
  });
});

