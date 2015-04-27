head.ready(function() {

	$(document).on("touchstart click", function(){
		$(".js-lang").removeClass("is-active");
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
	}
	fullHeight();
	$(window).resize(function(){
		if (winWidth == !$(window).width()) {
			fullHeight();
		}
	});

	$(".js-toggle-nav").on("click", function(){
		$("html").toggleClass("has-open-nav");
		$(this).toggleClass("is-active");
	});

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
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			accord.find(".js-accord-list").slideUp(200);
		}
		else {
			group.find(".js-accord-toggle").removeClass("is-active");
			$(this).addClass("is-active");
			group.find(".js-accord-list").slideUp(200);
			accord.find(".js-accord-list").slideDown(200);
		}
		
	    
	    
	});

});