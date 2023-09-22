import "./styles/index.scss";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// smooth scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const timeline = gsap.timeline();

gsap.to(".img-container", {
  scale: 52,
  ease: "ease",
  scrollTrigger: {
    trigger: ".video-section",
    start: "top top",
    end: "bottom",
    scrub: 1,
    pin: true,
  },
});

gsap.to(".right", {
  autoAlpha: 0,
  x: 500,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to(".left", {
  autoAlpha: 0,
  x: -500,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

timeline
  .from(".title span", {
    y: 150,
    skewY: 10,
    duration: 3,
  })
  .from(".text-bottom", {
    letterSpacing: -10,
    opacity: 0,
    duration: 3,
  });
