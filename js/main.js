$(function (){

  // Секция ABOUT

    $(".about__more").click(function (event) {
      event.preventDefault();
      $(".about__more").hide();
      $(".about__hidden").removeClass("about__hidden")
    })

  // Секция OFFER
  // Слайдер карточек
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

  // Секция Photos
  // Слайдер галереи
  $(".photos__items").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="offer__left photos__btn--left"></div>',
    nextArrow: '<div class="offer__right photos__btn--right"></div>',
  });

  // Fancybox
  $(".btn").fancybox();
  $(".header__excursion").fancybox();
  $(".structure__link").fancybox();
  $(".offer__link").fancybox();
  $(".offer__btn").fancybox();
  $(".offer__a").fancybox();

  // Скролл от меню
  function goToSelector (selector) {
		event.preventDefault();
		let top = $(selector).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
	}

	$(".link-about").click ( (event)=> { goToSelector (".about"); })
	$(".link-offer").click ( (event)=> { goToSelector (".offer"); })
	$(".link-genplan").click ( (event)=> { goToSelector (".genplan"); })
	$(".link-town").click ( (event)=> { goToSelector (".town"); })
	$(".link-photos").click ( (event)=> { goToSelector (".photos"); })
	$(".link-map").click ( (event)=> { goToSelector (".map"); })




})
