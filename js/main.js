$(function () {
  var mixer = mixitup('.galery__content');

 $('.slider__blog-inner').slick({
   dots: true,
   infinite: true,
   speed: 500,
   fade: true,
   cssEase: 'linear',
 });
});
