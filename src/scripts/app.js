$(document).ready(function(){
	console.log('Congrats, ES6!!!');

	// header menu
	$('.menu-toggle').click(function(){
		$(this).toggleClass('open');
		$('.nav-container').toggleClass('open');
	})
	// $('.title-bloc').click(function(){
	// 	$('.nav-container').removeClass('open');
	// })
	// header menu end


	// tab
	$(function() {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this).addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		})
	})
	// tab end
	let catalogSlider = null;
	let catalogSlider2 = null;
	let catalogSlider3 = null;
	let mediaQuerySize = 1023;


	// slider
	function catalogSliderInit () {
		if (!catalogSlider) {
			catalogSlider = new Swiper('.whatIs__slider', {
				autoHeight:true,
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				}
			});
		}
		if (!catalogSlider2) {
			catalogSlider2 = new Swiper(".search-about__slider", {
				effect: "cards",

				grabCursor: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},

			});

		}
		if (!catalogSlider3) {
			catalogSlider3 = new Swiper(".learn__slider", {
				effect: "coverflow",
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: "auto",
				initialSlide: 2,
				loop: true,
				coverflowEffect: {
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 10,
					initialSlide: 3,
					slideShadows: true
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		}
	}
	function catalogSliderDestroy () {
		if (catalogSlider) {
			catalogSlider.destroy();
			catalogSlider = null;
		}
		if (catalogSlider2) {
			catalogSlider2.destroy();
			catalogSlider2 = null;
		}
		if (catalogSlider3) {
			catalogSlider3.destroy();
			catalogSlider3 = null;
		}
	}
	$(window).on('load resize', function () {
		var windowWidth = $(this).innerWidth();
		if (windowWidth <= mediaQuerySize) {
			catalogSliderInit()
		} else {
			catalogSliderDestroy()
		}
	});
	let swiper = new Swiper(".recommendation__slider", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		initialSlide: 2,
		loop: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 10,
			initialSlide: 3,
			slideShadows: true
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

	});
	let swiper2 = new Swiper(".partner__container", {

		direction: 'horizontal',
		zoom: true,
		slidesPerView:3,
		spaceBetween: 10,

		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 50,
			},
			1440: {
				slidesPerView: 7,
				spaceBetween: 50,
			},
		},
		keyboard:
			{
				enabled: true,
				onlyInViewport: false,
			},
		mousewheel:
			{
				invert: true,
			},
		autoplay:
			{
				enabled: true,
				delay: 1,
			},
		loop: true,
		speed: 3000,
	});
	// slider end

	// animation
	AOS.init({
		offset: 200,
		duration: 1000,
		once:true,
		placement:top,

	});
	// animation end


    // accordion
	$('.question__container .question__box:nth-child(1) .question-head').addClass('active');
	$('.question__container .question__box:nth-child(1) .question-content').slideDown();
	$('.question-head').on('click', function() {
		if($(this).hasClass('active')) {
			$(this).siblings('.question-content').slideUp();
			$(this).removeClass('active');
		}
		else {
			$('.question-content').slideUp();
			$('.question-head').removeClass('active');
			$(this).siblings('.question-content').slideToggle();
			$(this).toggleClass('active');
		}
	});

	$('.faq__container .faq__box:nth-child(1) .faq-head').addClass('active');
	$('.faq__container .faq__box:nth-child(1) .faq-content').slideDown();
	$('.faq-head').on('click', function() {
		if($(this).hasClass('active')) {
			$(this).siblings('.faq-content').slideUp();
			$(this).removeClass('active');
		}
		else {
			$('.faq-content').slideUp();
			$('.faq-head').removeClass('active');
			$(this).siblings('.faq-content').slideToggle();
			$(this).toggleClass('active');
		}
	});
	// accordion end


	var mediaQuery = window.matchMedia('(max-width: 768px)');

	if (mediaQuery.matches) {
		$('.btn-open').click(function(){
			$(this).parent().toggleClass('open');
		})
	}

	$('.question-head').click(function(){
		if (!$(this).data('status')) {
			$(this).html('Hide');
			$(this).data('status', true);
		}
		else {
			$(this).html('Show');
			$(this).data('status', false);
		}
	});


	//
	// $(function(){
	//
	// 	$('.question-head').toggle(function(){
	//
	// 		$(this).text('Show');
	//
	// 	},function(){
	//
	// 		$(this).text('Hide');
	//
	// 	});
	//
	// });
})
