;(function() {
	$(document).ready(function() {

		const defWidth = 1896.4;
		const defBgPosition = -180;

		$(window).on('load', removeBg);
		$(window).resize(removeBg);

		function removeBg() {
			let currWidth = $(window).width();
			let difference = currWidth - defWidth;
			$('.main__about-us').css({'background-position': defBgPosition + difference / 2 });
		}
	});
})();