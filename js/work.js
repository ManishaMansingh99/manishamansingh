window.onload = function() {
// profile
    // Timeline for '.cd-timeline-content'
    let tl_profile = gsap.timeline({
      scrollTrigger: {
        trigger: '.left-section',
        start: 'top bottom',
        end: '35% center',
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
        end: '35% center',
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
let tl_head = gsap.timeline({
  scrollTrigger: {
    trigger: '.work-container h1',
    start: 'top center',
    end: '35% center',
    scrub: true,
    markers: false
  }
});
tl_head.from('.work-container h1', {
  x: -100, 
  autoAlpha: 0, 
  duration: 1
});
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cd-timeline-content',
        start: 'top bottom',
        end: '35% center',
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
        end: '35% center',
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
    start: 'top bottom',
    end: '35% center',
    scrub: true,
    markers: false
  }
});
tl_project_title.from('.fade-project', {
  y: -100, 
  autoAlpha: 0, 
  duration: 2
});

let tl_project_heading1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.text-card-left h2',
    start: 'top bottom',
    end: '35% center',
    scrub: true,
    markers: false
  }
});
tl_project_heading1.from('.text-card-left h2', {
  x: -100, 
  autoAlpha: 0, 
  duration: 1
});
let tl_project_heading2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.text-card-right h2',
    start: 'top bottom',
    end: '35% center',
    scrub: true,
    markers: false
  }
});
tl_project_heading2.from('.text-card-right h2', {
  x: 100, 
  autoAlpha: 0, 
  duration: 1
});

let tl_project_textl = gsap.timeline({
  scrollTrigger: {
    trigger: '.text-card-left .data',
    start: 'top bottom',
    end: '35% center',
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
    start: 'top bottom',
    end: '35% center',
    scrub: true,
    markers: false
  }
});

tl_project_textr.from('.text-card-right .data', {
  x: 100, 
  autoAlpha: 0, 
  duration: 2
});

let tl_project_li1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.text-card-left a',
    start: 'top bottom',
    end: '15% center',
    scrub: true,
    markers: false
  }
});
tl_project_li1.from('.text-card-left a', {
  y: 10, 
  autoAlpha: 0, 
  duration: 0.5
});
let tl_project_li2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.text-card-right a',
    start: 'top bottom',
    end: '15% center',
    scrub: true,
    markers: false
  }
});
tl_project_li2.from('.text-card-right a', {
  y: 10, 
  autoAlpha: 0, 
  duration: 0.5
});

    // skills
    let tl_skill_title = gsap.timeline({
      scrollTrigger: {
        trigger: '#skills h1',
        start: 'top bottom',
        end: '35% center',
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
        start: 'top bottom',
        end: '35% center',
        scrub: true,
        markers: false
      }
    });
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
    tl_contact_title.from('.contact-container h1', {
      x: 100, 
      autoAlpha: 0, 
      duration: 1
    });
    let tl_contact_text = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-container p',
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        markers: false
      }
    });
    tl_contact_text.from('.contact-container p', {
      x: 0, 
      autoAlpha: 0, 
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
