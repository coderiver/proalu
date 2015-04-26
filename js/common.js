head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

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
});