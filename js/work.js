// GSAP with ScrollTrigger for .cd-timeline-content
gsap.registerPlugin(ScrollTrigger);

// Select all the .cd-timeline-content elements
gsap.utils.toArray('.cd-timeline-content').forEach(block => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.cd-timeline-content',
      start: 'top center', 
      end: 'bottom center', 
      scrub: true,
      markers: false 
    }
  });

  // Define the animation for the block
  tl.from(block, {
    x: -100, 
    autoAlpha: 0, 
    duration: 1
  });
});

// Select all the .cd-timeline-content elements
gsap.utils.toArray('.cd-timeline-content1').forEach(block => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.cd-timeline-content1',
      start: 'top center', 
      end: 'bottom center', 
      scrub: true,
      markers: false 
    }
  });

  // Define the animation for the block
  tl.from(block, {
    x: 100, 
    autoAlpha: 0, 
    duration: 1
  });
});
// Select all the .cd-timeline-content elements
gsap.utils.toArray('.cd-timeline-content2').forEach(block => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.cd-timeline-content2',
      start: 'top center', 
      end: 'bottom center', 
      scrub: true,
      markers: false 
    }
  });

  // Define the animation for the block
  tl.from(block, {
    x: -100, 
    autoAlpha: 0, 
    duration: 1
  });
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)






// document.addEventListener('DOMContentLoaded', function() {
//   // GSAP with ScrollTrigger for .cd-timeline-content and .cd-timeline-content1
//   gsap.registerPlugin(ScrollTrigger);

//   // Animate .cd-timeline-content blocks
//   gsap.utils.toArray('.cd-timeline-content').forEach(block => {
//     gsap.from(block, {
//       scrollTrigger: {
//         trigger: block,
//         start: 'top center',
//         end: 'bottom center',
//         scrub: true,
//         markers: true // for debugging only, remove for production
//       },
//       x: -100,
//       autoAlpha: 0,
//       duration: 1
//     });
//   });

//   // Animate .cd-timeline-content1 blocks
//   gsap.utils.toArray('.cd-timeline-content1').forEach(block => {
//     gsap.from(block, {
//       scrollTrigger: {
//         trigger: block,
//         start: 'top center',
//         end: 'bottom center',
//         scrub: true,
//         markers: true // for debugging only, remove for production
//       },
//       x: 100,
//       autoAlpha: 0,
//       duration: 1
//     });
//   });

//   // Initialize Lenis for smooth scrolling
//   const lenis = new Lenis({
//     // Add Lenis initialization parameters here if needed
//   });

//   function raf(time) {
//     lenis.raf(time);
//     ScrollTrigger.update(); // Ensure ScrollTrigger updates on each frame
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

//   // Update ScrollTrigger after Lenis scroll
//   lenis.on('scroll', ScrollTrigger.update);

//   // Refresh ScrollTriggers on load, resize, or orientation change
//   ScrollTrigger.addEventListener("refreshInit", function() {
//     lenis.resize(); // Update Lenis on ScrollTrigger refresh
//   });

//   window.addEventListener('load', function() {
//     ScrollTrigger.refresh();
//   });

//   window.addEventListener('resize', function() {
//     ScrollTrigger.refresh();
//   });

//   window.addEventListener('orientationchange', function() {
//     ScrollTrigger.refresh();
//   });
// });

