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

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "bottom bottom",
    end: "bottom top",
    scrub: 1,
  },
});

timeline.from(".nav-logo", { width: "100%", y: "-100%" });
