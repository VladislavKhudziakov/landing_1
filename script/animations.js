;(function () {
	$(document).ready( function() {
		//start ready
		$(window).scroll(function() {
			if ($(this).width() > 1050) {
				if ($(this).scrollTop() > 660 && $(this).scrollTop() < 1100) {
					$('.main__about-us_inner:even').animate({left: '0'}, 500, 'easeOutBack');
					$('.main__about-us_inner:odd').animate({right: '0'}, 500, 'easeOutBack');
				};

				if ($(this).scrollTop() > 1750 && $(this).scrollTop() < 2366) {
					$('.team').children('.title').animate({top: '0'}, 1000, 'easeOutElastic');
					$('.team').children('.description').animate({top: '0'}, 1000, 'easeOutElastic', function() {
						$('.team__mate-card').eq(0).animate({left: '0'}, 500, 'easeOutBack');
						$('.team__mate-card').eq(1).animate({top: '0'}, 500, 'easeOutBack');
						$('.team__mate-card').eq(2).animate({right: '0'}, 500, 'easeOutBack');
					});
				};

				if ($(this).scrollTop() > 2700 && $(this).scrollTop() < 3250) {
					$('.provides').children('.title').animate({left: '0'}, 500, 'easeOutBack');
					$('.provides').children('.description').animate({left: '0'}, 500, 'easeOutBack', function() {
						$('.provides').children('.main_wrapper').animate({opacity: '1'}, 1000);
					});
				};

				if ($(this).scrollTop() > 4410) {
					$('.contact').children('.title').animate({opacity: '1'}, 500);
					$('.contact').children('.description').animate({opacity: '1'}, 500, function() {
						$('.contact__card').animate({top: '0'}, 1000, 'easeOutBounce', function() {
							$('.contact__form').animate({opacity: '1'}, 500, function() {
								$('.copyright').animate({opacity: 1}, 500);
							});
						});
					});
				};
			};
		});
		//end ready
	});
})();