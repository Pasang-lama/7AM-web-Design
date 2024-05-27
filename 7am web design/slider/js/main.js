$(document).ready(function () {
  $(".banner-slider").owlCarousel({
    dots: true,
    dotsData: true,
    dotsEach: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
    },
  });
});
