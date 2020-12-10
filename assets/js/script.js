$('.Carousel-slide').owlCarousel({
    loop: true,
    autoplay:true,

    responsive: {
      0: {
        dotsEach: 1,
        items: 3,
        margin: 10,
      },
      600: {
        dotsEach: 1,
        items: 5,
        margin: 36,
      },
      1000: {
        dotsEach: 1,
        items: 7,
          margin: 60,
      },
    },
})
$(document).ready(function () {
  $(".slider__wrapper").owlCarousel({
    loop: true,
    autoplay:true,

    responsive: {
      0: {
        dotsEach: 1,
        items: 1,
        margin: 10,
      },
      600: {
        dotsEach: 1,
        items: 1,
        margin: 36,
      },
      1000: {
        dotsEach: 1,
        items: 1,
          margin: 108,
      },
    },
  });
});