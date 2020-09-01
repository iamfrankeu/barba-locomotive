let scroll;

barba.init({
  transitions: [{
    name: 'custom-transition',
    once({ next }) {

      // init LocomotiveScroll on page load
      smooth(next.container);
    },
    beforeEnter({ next }) {

      // destroy the previous scroll
      scroll.destroy();

      // init LocomotiveScroll regarding the next page
      smooth(next.container);
    }
  }]
});

function smooth(container) {
  scroll = new LocomotiveScroll({
    el: container.querySelector('[data-scroll-container]'),
    smooth: true
  });
}