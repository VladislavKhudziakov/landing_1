;(function() {
	$(document).ready( function() {
		//start ready

		let timerId = setInterval( function () {

			$('.slider__list').each( function() {

				let currIndex = $('.slider__list').data('item');
				let prevIndex = currIndex;
				currIndex++;
				currIndex >= $(this).children().length ? currIndex = 0 : currIndex = currIndex;

				if ( $(this).data('bullit') == '') {

					$('.slider__list').children().eq(prevIndex).fadeOut();

				} else {

					let prevBullitIndex = $(this).data('bullit');
					$('.slider__list').children().eq(prevBullitIndex).fadeOut();
					$(this).data('bullit', '');

				};

				$(this).data('item', currIndex);
				$(this).children().eq(currIndex).fadeIn();

				let navigation = $(this).parent().next().children();

				navigation.removeClass('active');
				navigation.removeClass('prevActive');
				navigation.eq(currIndex).addClass('active');
				navigation.eq(prevIndex).addClass('prevActive');
			});		

		}, 4000);


		$('.slider__navigation').children().click( function() {

			let list = $(this).parent().prev().children().eq(0);

			if ($(this).data('index') == '') {
				let listData = list.data('item');
				$(this).parent().data('index', listData);
			}

			$(this).parent().children().removeClass('active');
			$(this).parent().children().removeClass('prevActive');

			let prevIndData = $(this).parent().data('index');

			list.children().eq(prevIndData).fadeOut();

			let currIndex = $(this).index();

			list.children().eq(currIndex).fadeIn();

			$(this).parent().data('index', currIndex);

			list.data('bullit', currIndex);

			$(this).parent().children().eq(prevIndData).addClass('prevActive');
			$(this).addClass('active');
		});
		//end ready
	});
})();