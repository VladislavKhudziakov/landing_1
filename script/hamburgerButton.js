;
(function() {
  $(document).ready(function() {
  $(window).resize(function() {
    if ($(this).width() >= 630) {
      $('.header__nav_navList').height('auto');
    } else {
      $('.header__nav_navList').height(0);
    }
  }); 

    $('.nav__Button').click(function() {
      let height = $(this).parent().parent().height();
      if (height == 0) {
        let currHeight = $(this).parent().parent().get()[0].scrollHeight;
         $(this).parent().parent().height(currHeight);
      } else {
         $(this).parent().parent().height(0);
      }
    });

  });
})();
