const tl = gsap.timeline();

tl.from("body", {
    opacity: 0,
    duration: 1
});

tl.from(".hero-content", {
   x: 100,
   opacity: 0,
   duration: 2
});