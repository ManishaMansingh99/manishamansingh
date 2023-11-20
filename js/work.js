window.onload = function() {
// profile
    // Timeline for '.cd-timeline-content'
    let tl_profile = gsap.timeline({
      scrollTrigger: {
        trigger: '.left-section',
        start: 'top bottom',
        end: '25% center',
        scrub: true,
        markers: false
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
        start: 'top bottom',
        end: '25% center',
        scrub: true,
        markers: false
      }
    });

    tl_profile_header.from('.profile-contain', {
      y: -100, 
      autoAlpha: 0, 
      duration: 1
    });
// work
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cd-timeline-content',
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        markers: false
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
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        markers: false
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
        start: 'top bottom',
        end: '25% center',
        scrub: true,
        markers: false
      }
    });

    tl2.from('.cd-timeline-content2', {
      x: -100, 
      autoAlpha: 0, 
      duration: 1
    });

// project
let tl_project_title = gsap.timeline({
  scrollTrigger: {
    trigger: '.fade-project',
    start: '-50% center',
    end: 'bottom center',
    scrub: true,
    markers: false
  }
});

tl_project_title.from('.fade-project', {
  y: -100, 
  autoAlpha: 0, 
  duration: 2
});

    let tl_project = gsap.timeline({
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: false
      }
    });

    tl_project.from('.fade-in', {
      y: 100, 
      autoAlpha: 0, 
      duration: 2
    });

    let tl_project_textl = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-card-left .data',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: false
      }
    });

    tl_project_textl.from('.text-card-left .data', {
      x: -100, 
      autoAlpha: 0, 
      duration: 2
    });

    let tl_project_textr = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-card-right .data',
        start: 'top center',
        end: '25% center',
        scrub: true,
        markers: false
      }
    });

    tl_project_textr.from('.text-card-right .data', {
      x: 100, 
      autoAlpha: 0, 
      duration: 2
    });

    // skills
    let tl_skill_title = gsap.timeline({
      scrollTrigger: {
        trigger: '#skills h1',
        start: '-50% center',
        end: '25% center',
        scrub: true,
        markers: false
      }
    });

    tl_skill_title.from('#skills h1', {
      x: -100, 
      autoAlpha: 0, 
      duration: 1
    });

    let tl_skill = gsap.timeline({
      scrollTrigger: {
        trigger: '.skill',
        start: '-50% center',
        end: '25% center',
        scrub: true,
        markers: false
      }
    });

    // tl_skill.from('.skill', {
    //   x: 100, 
    //   autoAlpha: 0, 
    //   duration: 1
    // });
    tl_skill.from('.skill', {
      rotation: 180, // Rotate 45 degrees
      x: 100, 
      autoAlpha: 0, 
      duration: 1
    });

    // contact
    let tl_contact_title = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-container h1',
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        markers: false
      }
    });
    tl_contact_title.to('.contact-container h1', {
      x: 0, 
      autoAlpha: 1, 
      duration: 1
    });

  let tl_contact = gsap.timeline({
    scrollTrigger: {
      trigger: '.soc',
      start: 'top bottom',
      end: 'bottom center',
      scrub: true,
      markers: false
    }
  });
  tl_contact.from('.soc', {
    y: -100, 
    autoAlpha: 0, 
    duration: 1
  });
    // Refresh ScrollTrigger after the window has fully loaded
    ScrollTrigger.refresh();
  };
