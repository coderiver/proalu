head.ready(function() {

	$(document).on("touchstart click", function(){
		$(".js-lang").removeClass("is-active");
		$(".js-select").removeClass("is-active");
		$(".js-select-list").fadeOut(100);
	});

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	document.createElement( "picture" );

	var winWidth = +$(window).width();
	function fullHeight() {
		var el = $(".js-full-height");
		var winHeight = +$(window).height();
		var headerHeight = +$(".header").outerHeight();
		el.css({
			height: winHeight-headerHeight
		});
		console.log(headerHeight);
	}
	fullHeight();
	$(window).resize(function(){
		if (winWidth == !$(window).width()) {
			fullHeight();
		}
	});

// nav toggle
	$(".js-toggle-nav").on("click", function(){
		$("html").toggleClass("has-open-nav");
		$(this).toggleClass("is-active");
		$(".js-nav-overlay").fadeToggle(200);
	});

	$(".js-nav-overlay").on("click", function(){
		$("html").removeClass("has-open-nav");
		$(".js-toggle-nav").removeClass("is-active");
		$(this).fadeOut(200);
	});
	$(".js-toggle-nav-search").on("click", function(){
		$(this).toggleClass("is-active");
		$(".js-nav-search").fadeToggle(200);
	});


// lang list
	$(".js-lang > a").on("click", function(){
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
		}
		else {
			$(this).addClass("is-active");
		}
		//event.stopPropagation();
		return false;
	});

// accordeon
	$(".js-accord-toggle").on("click",function () {
		var group = $(this).parents(".js-accord-group");
		var accord = $(this).parents(".js-accord");
		if (accord.hasClass("is-active")) {
			accord.removeClass("is-active");
			accord.find(".js-accord-list").slideUp(200);
		}
		else {
			group.find(".js-accord").removeClass("is-active");
			accord.addClass("is-active");
			group.find(".js-accord-list").slideUp(200);
			accord.find(".js-accord-list").slideDown(200);
		}

	});

	$(".js-accord-group").each(function(){
		$(this).find(".js-accord.is-active .js-accord-list").show();
	});

// select list
	   $(".js-select").on("click",function(event) {
	       event.stopPropagation();
	   });
	   $(".js-select-text").on("click" ,function(event) {
	   	var select = $(this).parents(".js-select");
	       if (select.hasClass("is-active")) {
	           $(".js-select").removeClass("is-active");
	           $(".js-select-list").fadeOut(200);
	       }
	       else {
	           $(".js-select").removeClass("is-active");
	           $(".js-select-list").fadeOut(200);
	           select.toggleClass("is-active").find(".js-select-list").fadeToggle(200);
	       }

	   });

	   $(".js-select-list li").on("click",function() {
	   	   if($(this).hasClass('select__opt-title')){return false}
	       var val = $(this).attr("data-val");
	       var text = $(this).text();
	       var select = $(this).parents(".js-select");
	       var selectList = $(this).parents(".js-select-list");
	       select.find(".js-select-text").text(text);
	       select.find("option").removeAttr("selected");
	       select.find('option[value="'+val+'"]').attr("selected", "selected");
	       selectList.find("li").removeClass("is-active");
	       $(this).addClass("is-active");
	       select.removeClass("is-active");
	       selectList.fadeOut(200);
	       return false;
	   });

	   $(".js-select select").on("change" , function(event) {
			var select = $(this).parents(".js-select");
			var val = $(this).val();
			select.find(".js-select-text").text(val);
	   });

//
	function tabsLoad() {
	       $(".js-tabs").each(function(){
	       	var group = $("."+$(this).attr("data-group"));
	        if ($(this).find(".is-active").length) {
	            var index = $(this).find(".is-active").index();
	         	group.find(".js-tabs-content").eq(index).show();
	        }
	        else {
	           $(this).find("li").eq(0).addClass("is-active");
	           group.find(".js-tabs-content").eq(0).show();
	         }
	       });
	   }
	   tabsLoad();
	    $('.js-tabs a').on("click",function () {
			var tabs = $(this).parents(".js-tabs");
			var group = $("."+tabs.attr("data-group"));
			var tabsCont = group.find(".js-tabs-content");
			var index = $(this).parent().index();
			var top = group.offset().top - 80;
			tabs.find("li").removeClass("is-active");
	      	$(this).parent().addClass("is-active");
			tabsCont.hide();
			tabsCont.eq(index).show();
			if ($(window).width() <= 1024) {
				$("html, body").animate({
				    scrollTop: top
				}, 500);
			}

			return false;
	    });

// init slick slider
	$(".js-slick-slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptiveHeight: true,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 768,
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
		]
	});

	//$(".js-fancybox-link").fancybox({
	//	padding: 0,
	//	nextEffect: 'fade',
	//	prevEffect: 'fade'
	//});
	//$(".js-fancybox a").fancybox({
	//	padding: 0,
	//	nextEffect: 'fade',
	//	prevEffect: 'fade'
	//});
//
	//$(".js-fancybox-single").fancybox({
	//	padding: 0,
	//	nextEffect: 'fade',
	//	prevEffect: 'fade',
	//	arrows: true
	//});

// slider in
	

	$('.el').each(function(index, el) {
		slider = $(this).find('.js-head-slider');
		slidernext = $(this).find('.slick-next-head');
		sliderprev = $(this).find('.slick-prev-head');

		slider.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: '.head-slider-item',
			nextArrow: slidernext,
			prevArrow: sliderprev,
			arrows: true

		});
	});

	

//popup slider
	
	$(".js-popup-slider").each(function(index, el) {
		slidernext = $(this).find('.popup-next');
		sliderprev = $(this).find('.popup-prev');
		if($(this).find('.popup-slider-item').length>1){
		$(this).slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: '.popup-slider-item',
			nextArrow: slidernext,
			prevArrow: sliderprev,
			arrows: true,
			speed: 900,
			init: true
		});
		}
		else{
			slidernext.hide();
			sliderprev.hide();
		}
	});

		

	

	if ($(".js-fotorama").length>0) {
		$(".js-fotorama").each(function() {
			if ($(this).children().length <= 1) {
				$(this).parent().addClass("is-inactive");
			}
		});
	}

	// 1. Initialize fotorama manually.
	var $fotoramaDiv = $('.js-fotorama').fotorama();

	// 2. Get the API object.
	var fotorama = $fotoramaDiv.data('fotorama');

	$(".js-fotorama-prev").on("click", function() {
		fotorama.show('<');
		return false;
	});
	$(".js-fotorama-next").on("click", function() {
		fotorama.show('>');
		return false;
	});




	if ($("html").hasClass("desktop")) {
		var fotoramaAutoplay = 5000;
	}
	else {
		var fotoramaAutoplay = 0;
	}
	$('.js-fotorama-slider').fotorama({
		minWidth: '100%',
		minHeight: '100%',
		loop: true,
		autoplay: fotoramaAutoplay,
		autoplay: fotoramaAutoplay
	});

	// 1. Initialize fotorama manually.
	var $fotoramaSliderDiv = $('.js-fotorama-slider').fotorama();

	// 2. Get the API object.
	var fotoramaSlider = $fotoramaSliderDiv.data('fotorama');

	$(".js-fotorama-slider-prev").on("click", function() {
		fotoramaSlider.show('<');
		return false;
	});
	$(".js-fotorama-slider-next").on("click", function() {
		fotoramaSlider.show('>');
		return false;
	});


	// popup


	$('.js-popup-btn').on('click', function() {
		pop = $(this).data('popup');
		$('.'+pop).toggleClass('is-active');
		$('.js-slick-slider').resize();
		return false;
	});

	$('.js-popup-close, .popup__click').on('click', function() {
		$('.popup').removeClass('is-active');
		return false;
	});

	

});