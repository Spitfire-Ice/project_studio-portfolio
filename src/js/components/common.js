import './menu';
import 'slick-carousel';

$('.slick-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    //appendArrows: $('#slick_arrows'),'<span><i class="fas fa-arrow-circle-left fa-3x "></i></span>','<span><i class="fas fa-arrow-circle-right fa-3x "></i></span>',
    prevArrow: $('#slider_arrow_left'),
    nextArrow: $('#slider_arrow_right')
  });

  