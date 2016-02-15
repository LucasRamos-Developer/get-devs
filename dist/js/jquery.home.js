var HOME = (function ($, GLOBALS) {
	'use strict';
	var home = HOME || {};
	var fancybox_video = function() {
		$('.fancybox-videos').on("click", function() {
			var href_video = $(this).data('ref');
			console.log("[HOME] : Fancybox / " + href_video);
			$.fancybox({
				'href' : href_video,
		        'type' : 'iframe',
				'width' : 940,
				'openEffect'  : 'none',
				'closeEffect' : 'none',
				'helpers' : {
					media : {}
				}
			});
			return false;
		});
	},
	carrosel = function() {
		$('#slider-carrosel').slick({
			prevArrow: '<span class="slick-prev"></span>',
			nextArrow: '<span class="slick-next"></span>',
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	};
	home.init = function(){
		console.log("[FUNCTION] : Home");
		fancybox_video();
		carrosel();
	};
	return home;
}(jQuery, GLOBALS));

HOME.init();