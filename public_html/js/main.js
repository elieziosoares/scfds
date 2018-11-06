(function ($) {
	"use strict"

	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	// Mobile nav toggle
	$('.navbar-toggle').on('click', function () {
		$('.main-nav').toggleClass('open');
	});

	// Fixed nav
	$(window).on('scroll', function () {
		var wScroll = $(this).scrollTop();
		wScroll > 50 ? $('#header').addClass('fixed-navbar') : $('#header').removeClass('fixed-navbar');
	});

	// Smooth scroll
	$(".main-nav a[href^='#']").on('click', function (e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 800);
	});

	// Section title animation
	$('.section-title').each(function () {
		var $this = $(this);
		$this.find('.title > span').each(function (i) {
			var $span = $(this);
			var animated = new Waypoint({
				element: $this,
				handler: function () {
					setTimeout(function () {
						$span.addClass('appear')
					}, i * 250);
					this.destroy();
				},
				offset: '95%'
			});
		});
	});

	// Galery Owl
	var owl = $('#galery-owl')

	owl.owlCarousel({
		animateIn: 'fadeIn', // and this
		animateOut: 'fadeOut',
		items: 1,
		loop: true,
		margin: 0,
		dots: false,
		nav: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		autoplayTimeout: 1000,
		responsive: {
			0: {
				stagePadding: 0,
			},
			768: {
				stagePadding: 120,
			}

		},
		onChanged: callBack
	});



	//Delay Segundo Slide
	function callBack(event) {
		// Solution to have correct item number. See: https://github.com/OwlCarousel2/OwlCarousel2/issues/1029. Thanks to Modicrumb
		var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
		var allItems = event.item.count;
		if (current > allItems || current <= 0) {
			current = allItems - (current % allItems);
		}

		if (current == 1 || current == 3) {
			owl.trigger('stop.owl.autoplay')
			setTimeout(function () {
				owl.trigger('play.owl.autoplay')
			}, 5000)
		}
	}

	// Parallax Background
	$.stellar({
		responsive: true
	});

	// CountTo
	$('.counter').each(function () {
		var $this = $(this);
		var counter = new Waypoint({
			element: $this,
			handler: function () {
				$this.countTo();
			},
			offset: '95%'
		});
	});


	jQuery(window).load(function () {
		$(".loader").fadeOut("slow");
		$("#home").toggle("fast");
	});



})(jQuery);