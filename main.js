let scroll;

barba.hooks.after(() => {
	scroll.update();
});

barba.init({
  transitions: [{
    name: 'custom-transition',
    once({ next }) {

      // init LocomotiveScroll on page load
      smooth(next.container);
    },
    leave(){},
    beforeEnter({ next }) {

      // destroy the previous scroll
      scroll.destroy();

      // init LocomotiveScroll regarding the next page
      smooth(next.container);
    },
    enter(){}
  }]
});

function smooth(container) {
  scroll = new LocomotiveScroll({
    el: container.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true
  });
}