$(function (){

  $(".about__more").click(function (event) {
    event.preventDefault();
    $(".about__more").hide();
    $(".about__hidden").removeClass("about__hidden")
  })

  $(".offer__items").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    arrows: true,
    prevArrow: '<div class="offer__left"></div>',
    nextArrow: '<div class="offer__right"></div>',
  });


})
