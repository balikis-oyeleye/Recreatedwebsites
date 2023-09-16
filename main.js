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

// Nav Animation
gsap.from(".nav-logo", {
  width: "100%",
  y: "-100%",
  scrollTrigger: {
    trigger: ".hero",
    start: "bottom bottom",
    end: "bottom top",
    scrub: 1,
  },
});

// Header Text Animation
const headerText = gsap.utils.toArray(".text-container h1");

headerText.forEach((text) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      start: "-100% 5%",
      scrub: 0.8,
    },
  });

  timeline.to(text, {
    y: "100%",
    duration: 1,
  });
});

// Header Circle Animation

const circleTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-circle",
    start: "top top",
    stop: "bottom top",
    scrub: 1,
  },
});

circleTimeline
  .to(".img-container", {
    borderRadius: "0%",
    width: "100vw",
    height: "100vh",
  })
  .to(
    ".navigation",
    {
      backgroundColor: "#e8e2da",
      color: "#2e2a27",
    },
    0
  )
  .to("main", { backgroundColor: "#e8e2da" }, 0);
