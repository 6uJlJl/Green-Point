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
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
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

  $(".photos__items--small").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });



  // Слайдер в popup OFFER

  $(".offer__link").on('click', function() {
    var string = '<div id="offer-popup" class="offer-popup"><div class="offer-popup-wrapper"><div class="offer-popup-left"><div class="offer-popup-slider-for"><img src="'+$(this).data("image1")+'" alt=""><img src="'+$(this).data("image2")+'" alt=""><img src="'+$(this).data("image3")+'" alt=""><img src="'+$(this).data("image4")+'" alt=""><img src="'+$(this).data("image5")+'" alt=""></div><br><div class="offer-popup-images"><img src="'+$(this).data("image1")+'" alt=""><img src="'+$(this).data("image2")+'" alt=""><img src="'+$(this).data("image3")+'" alt=""><img src="'+$(this).data("image4")+'" alt=""><img src="'+$(this).data("image5")+'" alt=""></div></div><div class="offer-popup-right"><h3 class="offer-popup-title">'+$(this).data("title")+'</h3><div class="offer-popup-ads"><span class="offer-popup-ad"><span class="offer-popup-ad--m2"></span>'+$(this).data("adM2")+'</span><span class="offer-popup-ad"><span class="offer-popup-ad--key"></span>'+$(this).data("adKey")+'</span><span class="offer-popup-ad"><span class="offer-popup-ad--pool"></span>'+$(this).data("adPool")+'</span><span class="offer-popup-ad"><span class="offer-popup-ad--sot"></span>'+$(this).data("adSot")+'</span><span class="offer-popup-ad"><span class="offer-popup-ad--bed"></span>'+$(this).data("adBed")+'</span><span class="offer-popup-ad"><span class="offer-popup-ad--place"></span>'+$(this).data("adPlace")+'</span></div><span class="offer-popup-line"></span><p class="offer-popup-price-rub">'+$(this).data("priceRub")+' Р</p><p class="offer-popup-price-doll">'+$(this).data("priceDoll")+' $</p><span class="offer-popup-line"></span><form class="offer-popup-form" action="post"><p class="offer-popup-form-title">Записаться на просмотр дома</p><input class="popup__input-text" type="text" name="offer-popup-name" placeholder="Имя*" required><input class="popup__input-text" type="text" name="offer-popup-phone" placeholder="Телефон*" required><input class="btn" type="submit" value="Отправить"></form></div></div></div>';
    $.fancybox.open({
      src : string,
      type : 'html',
      smallBtn : true,
      touch: {
        vertical: true, // Allow to drag content vertically
        momentum: true // Continue movement after releasing mouse/touch when panning
      },
      opts : {
        afterLoad : function() {
          $('.offer-popup-images').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.offer-popup-slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
          });
          $('.offer-popup-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.offer-popup-images',
          });
        }
      }

    })
  });

  // Fancybox
  $(".btn").fancybox();
  $(".header__excursion").fancybox();
  $(".offer__btn").fancybox();
  $(".offer__a").fancybox();

  $(".structure__link").on('click', function() {
    var string = '<div class="structure-popup"><div class="structure-popup-wrapper"><img class="structure-popup-image" src="'+$(this).data("image")+'" alt="'+$(this).data("title")+'"><div class="structure-popup-right"><h3 class="structure-popup-title">'+$(this).data("title")+'</h3><p class="structure-popup-text">'+$(this).data("text")+'</p><p class="structure-popup-link"><a href="'+$(this).data("link")+'">'+$(this).data("link-text")+'</a></p></div></div></div>';
    $.fancybox.open({
      src : string,
      type : 'html',
      smallBtn : true
    });
  });

  $(".form").on('submit', function(event) {
    event.preventDefault();
    var string = '<div class="popup"><div class="popup-wrapper"><p class="popup__title">Спасибо за вашу заявку!</p><label class="popup__input-label">Мы скоро свяжемся с Вами</label><input class="btn btn--transparent" onclick="$.fancybox.close()" type="button" value="Ок"></div></div>';
    $.fancybox.open({
      src : string,
      type : 'html',
      smallBtn : true
    });
  });

  $(".myfancyboxclose").click(function(){
    $.fancybox.close();
  })

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

  // Параллакс листья в HEADER
  const leaf1 = document.querySelector('.leaf-1');
  const leaf2 = document.querySelector('.leaf-2');
  const leaf3 = document.querySelector('.leaf-3');
  const leaf4 = document.querySelector('.leaf-4');
  const boxerCenterX1 = leaf1.offsetLeft + (leaf1.offsetWidth / 2);
	const boxerCenterY1 = leaf1.offsetTop + (leaf1.offsetHeight / 2);
	const boxerCenterX2 = leaf2.offsetLeft + (leaf2.offsetWidth / 2);
	const boxerCenterY2 = leaf2.offsetTop + (leaf2.offsetHeight / 2);
	const boxerCenterX3 = leaf3.offsetLeft + (leaf3.offsetWidth / 2);
	const boxerCenterY3 = leaf3.offsetTop + (leaf3.offsetHeight / 2);
	const boxerCenterX4 = leaf4.offsetLeft + (leaf4.offsetWidth / 2);
	const boxerCenterY4 = leaf4.offsetTop + (leaf4.offsetHeight / 2);

  // Параллакс листья в WHY
  const cloud1 = document.querySelector('.cloud-1');
  const cloud2 = document.querySelector('.cloud-2');
  const cloud1X1 = cloud1.offsetLeft + (cloud1.offsetWidth / 2);
	const cloud1Y1 = cloud1.offsetTop + (cloud1.offsetHeight / 2);
	const cloud2X2 = cloud2.offsetLeft + (cloud2.offsetWidth / 2);
  const cloud2Y2 = cloud2.offsetTop + (cloud2.offsetHeight / 2);

  // Параллакс листья в OFFER
  const leaves = document.querySelector('.leaves');
  const leavesX1 = leaves.offsetLeft + (leaves.offsetWidth / 2);
	const leavesY1 = leaves.offsetTop + (leaves.offsetHeight / 2);

  // Параллакс листья в PHOTOS
  const leavesph = document.querySelector('.leavesph');
  const leavesphX1 = leavesph.offsetLeft + (leavesph.offsetWidth / 2);
  const leavesphY1 = leavesph.offsetTop + (leavesph.offsetHeight / 2);

  // Параллакс птицы в FORM
  const bird1 = document.querySelector('.birds1');
  const bird2 = document.querySelector('.birds2');
  const bird1X1 = bird1.offsetLeft + (bird1.offsetWidth / 2);
	const bird1Y1 = bird1.offsetTop + (bird1.offsetHeight / 2);
	const bird2X2 = bird2.offsetLeft + (bird2.offsetWidth / 2);
  const bird2Y2 = bird2.offsetTop + (bird2.offsetHeight / 2);

  fluidboxer = window.matchMedia("(min-width: 726px)");

	function getMousePos(main, xRef, yRef) {

		let panelRect = main.getBoundingClientRect();
		return {
			x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)* main.offsetWidth,
			y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * main.offsetHeight
		};
	}

  var isOverHeader = false;
  var header = document.querySelector(".header");
  header.addEventListener("mouseover", function(){
    isOverHeader = true;
  })
  header.addEventListener("mouseout", function(){
    isOverHeader = false;
  });

  var isOverwhy;
  var why = document.querySelector(".why");
  why.addEventListener("mouseover", function(){
    isOverwhy = true;
  })
  why.addEventListener("mouseout", function(){
    isOverwhy = false;
  })

  var isOverOffer;
  var offer = document.querySelector(".offer");
  offer.addEventListener("mouseover", function(){
    isOverOffer = true;
  })
  offer.addEventListener("mouseout", function(){
    isOverOffer = false;
  })

  var isOverPhotos;
  var photos = document.querySelector(".photos");
  photos.addEventListener("mouseover", function(){
    isOverPhotos = true;
  })
  photos.addEventListener("mouseout", function(){
    isOverPhotos = false;
  })

  var isOverForm;
  var form = document.querySelector(".form-section");
  form.addEventListener("mouseover", function(){
    isOverForm = true;
  })
  photos.addEventListener("mouseout", function(){
    isOverForm = false;
  })

	el =
	document.body.addEventListener("mousemove", function(e) {
    if (isOverHeader) {
      let mousePos = getMousePos( header, e.clientX, e.clientY),
      distX1 = mousePos.x - boxerCenterX1,
      distY1 = mousePos.y - boxerCenterY1;
      distX2 = mousePos.x - boxerCenterX2,
      distY2 = mousePos.y - boxerCenterY2;
      distX3 = mousePos.x - boxerCenterX3,
      distY3 = mousePos.y - boxerCenterY3;
      distX4 = mousePos.x - boxerCenterX4,
      distY4 = mousePos.y - boxerCenterY4;
      if (Math.abs(distX1) < 10000 && Math.abs(distY1) < 2000 && fluidboxer.matches) {
        leaf1.style.transform = "translate("+(-1*distX1)/15+"px,"+(-1*distY1)/15+"px)";
      }
      if (Math.abs(distX2) < 10000 && Math.abs(distY2) < 2000 && fluidboxer.matches) {
        leaf2.style.transform = "translate("+(-1*distX2)/15+"px,"+(-1*distY2)/15+"px)";
      }
      if (Math.abs(distX3) < 10000 && Math.abs(distY3) < 2000 && fluidboxer.matches) {
        leaf3.style.transform = "translate("+(-1*distX3)/15+"px,"+(-1*distY3)/15+"px)";
      }
      if (Math.abs(distX4) < 10000 && Math.abs(distY4) < 2000 && fluidboxer.matches) {
        leaf4.style.transform = "translate("+(-1*distX4)/15+"px,"+(-1*distY4)/15+"px)";
      }
    }
    if (isOverwhy) {
      let mousecloudPos = getMousePos( why, e.clientX, e.clientY),
      distcloudX1 = mousecloudPos.x - cloud1X1,
      distcloudY1 = mousecloudPos.y - cloud1Y1;
      distcloudX2 = mousecloudPos.x - cloud2X2,
      distcloudY2 = mousecloudPos.y - cloud2Y2;
      if (Math.abs(distcloudX1) < 1000 && distcloudY1 < 660 && fluidboxer.matches) {
        cloud1.style.transform = "translate("+(-1*distcloudX1)/15+"px,"+(-1*distcloudY1)/15+"px)";
      }
      if (Math.abs(distcloudX2) < 1000 && distcloudY2 < 660 && fluidboxer.matches) {
        cloud2.style.transform = "translate("+(-1*distcloudX2)/15+"px,"+(-1*distcloudY2)/15+"px)";
      }
    }
    if (isOverOffer) {
      let mouseleavesPos = getMousePos( offer, e.clientX, e.clientY),
      distleavesX1 = mouseleavesPos.x - leavesX1,
      distleavesY1 = mouseleavesPos.y - leavesY1;
      if (Math.abs(distleavesX1) < 1000 && distleavesY1 < 660 && fluidboxer.matches) {
        leaves.style.transform = "translate("+(-1*distleavesX1)/15+"px,"+(-1*distleavesY1)/15+"px)";
      }
    }
    if (isOverPhotos) {
      let mouseleavesphPos = getMousePos( photos, e.clientX, e.clientY),
      distleavesphX1 = mouseleavesphPos.x - leavesphX1,
      distleavesphY1 = mouseleavesphPos.y - leavesphY1;
      if (Math.abs(distleavesphX1) < 1000 && distleavesphY1 < 660 && fluidboxer.matches) {
        leavesph.style.transform = "translate("+(-1*distleavesphX1)/15+"px,"+(-1*distleavesphY1)/15+"px)";
      }
    }
    if (isOverForm) {
      let mousebirdsPos = getMousePos( form, e.clientX, e.clientY),
      distbirdX1 = mousebirdsPos.x - bird1X1,
      distbirdY1 = mousebirdsPos.y - bird1Y1;
      distbirdX2 = mousebirdsPos.x - bird2X2,
      distbirdY2 = mousebirdsPos.y - bird2Y2;
      if (Math.abs(distbirdX1) < 1000 && distbirdY1 < 660 && fluidboxer.matches) {
        bird1.style.transform = "translate("+(-1*distbirdX1)/15+"px,"+(-1*distbirdY1)/15+"px)";
      }
      if (Math.abs(distbirdX2) < 1000 && distbirdY2 < 660 && fluidboxer.matches) {
        bird2.style.transform = "translate("+(-1*distbirdX2)/15+"px,"+(-1*distbirdY2)/15+"px)";
      }
    }
  })

  // Скрытие и показ элементов в STRUCTURE

  function hideStructures ( bool ) {
    var structures = document.querySelectorAll(".structure__item");
    for (let i=0; i<structures.length; i++) {
      if (i > 2) {
        bool
          ? structures[i].classList.add("hidden")
          : structures[i].classList.remove("hidden");
      }
    }
    $(".structure__show").css("display",bool ? "inline-block" : "none")
  }

  $(".structure__show").click(function(){
    hideStructures(false);
  })

  // Клик по ФИЛЬТРУ
  $(".filter__buttons").on("click", function(event){
    if (!event.target.classList.contains("filter__buttons")) {
      $(this).find(".filter__btn").each(function(){
        $(this).removeClass("filter__active");
      })
      event.target.classList.add("filter__active");
    }
  })

  // РАЗМЕРЫ экрана и РЕСАЙЗ

  if ($(window).width() < 769) {
    hideStructures(true);
  }

  if ( $(window).width() < 577) {
    $(".photos__items--small").removeClass("hidden");
    $(".photos__items").addClass("hidden");
  }


  $(window).resize(function(){
    $(".header__nav ul").removeClass("show");
    $(".header__burger").removeClass("header__burger--active");
    if ($(window).width() < 769) {
      hideStructures(true);
    }
    else {
      hideStructures(false);
    }
    if ( $(window).width() < 577) {
      $(".photos__items--small").removeClass("hidden");
      $(".photos__items").addClass("hidden");
    } else {
      $(".photos__items--small").addClass("hidden");
      $(".photos__items").removeClass("hidden");
    }
  })

  // Управление МЕНЮ
  var navbar = document.querySelector(".header__nav");
  var sticky = navbar.offsetTop;

  $(window).scroll(function(){
    if ($(window).width()>1024) {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      };
    }
  })

  $(".header__burger").click (function(){
    $(".header__burger").toggleClass("header__burger--active")
    $(".header__nav ul").toggleClass("show")
  })
  $(".header__nav li").click (function(){
    $(".header__burger").toggleClass("header__burger--active")
    $(".header__nav ul").toggleClass("show")
  })
  $("body").click (function(event){
    if (!($(".header__nav ul").hasClass("show"))){
      if (!(event.target.parentNode.parentNode.classList.contains("header__nav")||event.target.parentNode.classList.contains("header__nav"))) {
        $(".header__nav ul").removeClass("show")
      }
    }

  })
})
