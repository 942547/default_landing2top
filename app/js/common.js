$(function() {

	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	})
	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("menu").removeClass("sf-menu").removeClass("menu_theme")
	.parent().mmenu({
		counters: true,
		navbars: [
		{
			"position": "bottom",
			"content": [
			"<a class='fa fa-envelope' href='#/'></a>",
			"<a class='fa fa-twitter' href='#/'></a>",
			"<a class='fa fa-facebook' href='#/'></a>"
			]
		}
		],
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		},
		dragOpen: true
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
	});
	var api = $("#mobile-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});


	//initialize swiper when document ready  
	var mySwiper = new Swiper ('.swiper-container', {
		pagination: '.swiper-pagination',
		// nextButton: '.swiper-button-next',
		// prevButton: '.swiper-button-prev',
		paginationClickable: true,
		// spaceBetween: 50,
		centeredSlides: true,
		autoplay: 7000,
		loop: true,
		keyboardControl: true,
		autoplayDisableOnInteraction: false,
		// paginationType: 'progress',
	});

	// Плавная прокрутка
	$(".menu").on("click","a[href^='#']", function (event) {

		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id  = $(this).attr('href'),

		// находим высоту, на которой расположен блок
		top = $(id).offset().top-56;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({scrollTop: top}, 800);
	});

	
	// TO TOP BUTTON
	$("#back-top").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({scrollTop: 0}, 800);
			return false;
		});
	});

	// popup
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});


});