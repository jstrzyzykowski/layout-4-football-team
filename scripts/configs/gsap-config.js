gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-showcase', {
  duration: 0.5,
  opacity: 0,
  y: -50,
  stagger: 0.3,
});

gsap.from('.animate-players', {
  scrollTrigger: '.stat-box',
  duration: 0.7,
  opacity: 0,
  y: -50,
  stagger: 0.5
})

gsap.from('.stat-box', {
  scrollTrigger: '.stat-box',
  duration: 0.4,
  opacity: 0,
  y: 20,
  stagger: 0.2
})

gsap.from('.animate-achievements', {
  scrollTrigger: '.achievements .bg-custom-dark',
  duration: 0.7,
  opacity: 0,
  y: -60,
});

gsap.from('.animate-contact', {
  scrollTrigger: '.contact-email',
  duration: 0.5,
  opacity: 0,
  y: -30,
  stagger: 0.4
});