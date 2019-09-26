'use strict';

$(document).ready(function () {

  function servicesChangeSlide() {
    if (document.body.clientWidth >= 1000) {
      var currentTextBlockWidth = $('#services .services-container').height() + 'px';
      $('#services div.service-item').hover(function () {
        $('#services div.service-item').removeClass('active');
        $(this).addClass('active');

        $('#services div.service-item div.text-block').stop().animate({
          opacity: 0,
          height: 0
        }, 300);

        $(this).find('div.text-block').stop().animate({
          opacity: 1,
          height: currentTextBlockWidth
        }, 300);
      });
    } else {
      $('#services div.service-item').unbind();
      var _currentTextBlockWidth = '100%';
      $('#services div.service-item.active div.text-block').css({
        'height': _currentTextBlockWidth
      });
      $('#services div.service-item').click(function () {
        $('#services div.service-item').removeClass('active');
        $(this).addClass('active');

        $('#services div.service-item div.text-block').stop().animate({
          opacity: 0,
          height: 0
        }, 300);

        $(this).find('div.text-block').stop().animate({
          opacity: 1,
          height: _currentTextBlockWidth
        }, 300);
      });
    }
  }

  servicesChangeSlide();
  $(window).resize(function () {
    servicesChangeSlide();
  });
});