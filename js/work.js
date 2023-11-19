// document.addEventListener('DOMContentLoaded', function() {
//   gsap.registerPlugin(ScrollTrigger);

//   function initAnimations() {
//     ['.cd-timeline-content', '.cd-timeline-content1', '.cd-timeline-content2'].forEach((selector, index) => {
//       gsap.utils.toArray(selector).forEach(block => {
//         let tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: block, // Use each block as its own trigger
//             start: 'top center', // Adjust this as needed
//             end: 'bottom center',
//             scrub: true,
//             markers: true
//           }
//         });

//         tl.from(block, {
//           x: index % 2 === 0 ? -100 : 100, 
//           autoAlpha: 0, 
//           duration: 1
//         });
//       });
//     });
//   }

//   initAnimations();

//   // Initialize Lenis for smooth scrolling
//   const lenis = new Lenis();

//   lenis.on('scroll', (e) => {
//     console.log(e);
//   });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

//   // Resize event listener to refresh ScrollTrigger
//   window.addEventListener('resize', () => {
//     ScrollTrigger.refresh();
//     initAnimations(); // Reinitialize animations as the layout might have changed
//   });

//   // Programmatically trigger a resize event after a short delay
//   setTimeout(() => {
//     window.dispatchEvent(new Event('resize'));
//   }, 500); // Adjust the delay as needed
// });










// document.addEventListener('DOMContentLoaded', function() {
// // GSAP with ScrollTrigger for .cd-timeline-content
// gsap.registerPlugin(ScrollTrigger);

// // Select all the .cd-timeline-content elements
// gsap.utils.toArray('.cd-timeline-content').forEach(block => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.cd-timeline-content',
//       start: 'top center', 
//       end: 'bottom center', 
//       scrub: true,
//       markers: false 
//     }
//   });

//   // Define the animation for the block
//   tl.from(block, {
//     x: -100, 
//     autoAlpha: 0, 
//     duration: 1
//   });
// });

// // Select all the .cd-timeline-content elements
// gsap.utils.toArray('.cd-timeline-content1').forEach(block => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.cd-timeline-content1',
//       start: 'top center', 
//       end: 'bottom center', 
//       scrub: true,
//       markers: false 
//     }
//   });

//   // Define the animation for the block
//   tl.from(block, {
//     x: 100, 
//     autoAlpha: 0, 
//     duration: 1
//   });
// });
// // Select all the .cd-timeline-content elements
// gsap.utils.toArray('.cd-timeline-content2').forEach(block => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.cd-timeline-content2',
//       start: 'top center', 
//       end: 'bottom center', 
//       scrub: true,
//       markers: false 
//     }
//   });

//   // Define the animation for the block
//   tl.from(block, {
//     x: -100, 
//     autoAlpha: 0, 
//     duration: 1
//   });
// });

// // const lenis = new Lenis()

// // lenis.on('scroll', (e) => {
// // console.log(e)
// // })

// // function raf(time) {
// // lenis.raf(time)
// // requestAnimationFrame(raf)
// // }

// // requestAnimationFrame(raf)

//   // Resize event listener to refresh ScrollTrigger
//   window.addEventListener('resize', () => {
//     ScrollTrigger.refresh();
//     initAnimations(); // Reinitialize animations as the layout might have changed
//   });


// })

  // window.onload = function() {
  //   // let tl = gsap.timeline({
  //   //   scrollTrigger: {
  //   //     trigger: '.cd-timeline-content',
  //   //     start: 'top center',
  //   //     end: 'bottom center',
  //   //     scrub: true,
  //   //     markers: true
  //   //   }
  //   // });

  //   // tl.from('.cd-timeline-content', {
  //   //   x: -100, 
  //   //   autoAlpha: 0, 
  //   //   duration: 1
  //   // });

  //   // let tl1 = gsap.timeline({
  //   //   scrollTrigger: {
  //   //     trigger: '.cd-timeline-content1',
  //   //     start: 'top center',
  //   //     end: 'bottom center',
  //   //     scrub: true,
  //   //     markers: true
  //   //   }
  //   // });

  //   // tl1.from('.cd-timeline-content1', {
  //   //   x: 100, 
  //   //   autoAlpha: 0, 
  //   //   duration: 1
  //   // });

  //   let tl2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.cd-timeline-content2',
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: true,
  //       markers: true
  //     }
  //   });

  //   tl2.from('.cd-timeline-content2', {
  //     x: -100, 
  //     autoAlpha: 0, 
  //     duration: 1
  //   });
  //   ScrollTrigger.refresh();
  // };






  window.onload = function() {

    // Timeline for '.cd-timeline-content'
    let tl_profile = gsap.timeline({
      scrollTrigger: {
        trigger: '.left-section',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: true
      }
    });

    tl_profile.from('.left-section', {
      x: -100, 
      autoAlpha: 0, 
      duration: 1
    });

    let tl_profile_header = gsap.timeline({
      scrollTrigger: {
        trigger: '.profile-contain',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: false
      }
    });

    tl_profile_header.from('.profile-contain', {
      y: -100, 
      autoAlpha: 0, 
      duration: 1
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cd-timeline-content',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: true
      }
    });

    tl.from('.cd-timeline-content', {
      x: -100, 
      autoAlpha: 0, 
      duration: 1
    });

    // Timeline for '.cd-timeline-content1'
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.cd-timeline-content1',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: true
      }
    });

    tl1.from('.cd-timeline-content1', {
      x: 100, 
      autoAlpha: 0, 
      duration: 1
    });

    // Timeline for '.cd-timeline-content2'
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.cd-timeline-content2',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: true
      }
    });

    tl2.from('.cd-timeline-content2', {
      x: -100, 
      autoAlpha: 0, 
      duration: 1
    });


    let tl_project = gsap.timeline({
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: false
      }
    });

    tl_project.from('.fade-in', {
      y: 100, 
      autoAlpha: 0, 
      duration: 1
    });

    let tl_project_textl = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-card-left .data',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: true
      }
    });

    tl_project_textl.from('.text-card-left .data', {
      x: -100, 
      autoAlpha: 0, 
      duration: 1
    });

    let tl_project_textr = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-card-right .data',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: true
      }
    });

    tl_project_textr.from('.text-card-right .data', {
      x: 100, 
      autoAlpha: 0, 
      duration: 1
    });
    // Refresh ScrollTrigger after the window has fully loaded
    ScrollTrigger.refresh();
  };
