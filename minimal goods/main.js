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

// Furniture, Decor, Office and Tech
const imageGrids = gsap.utils.toArray(".img-wrapper .grid");
const fdtText = gsap.utils.toArray(".fdt-text");

imageGrids.forEach((grid) => {
  let currentGrid = imageGrids.indexOf(grid);

  gsap.timeline({
    scrollTrigger: {
      trigger: grid,
      start: "20% bottom",
      end: "bottom bottom",
      onEnter: () => {
        fdtText.forEach((text) => text.classList.remove("is-active"));
        fdtText[currentGrid].classList.add("is-active");
      },
      onEnterBack: () => {
        fdtText.forEach((text) => text.classList.remove("is-active"));
        fdtText[currentGrid].classList.add("is-active");
      },
    },
  });
});

// Grid-image move 1
const gridImage1 = gsap.utils.toArray(".grid-item:nth-child(3n+1)");
console.log(gridImage1);

gridImage1.forEach((image) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      stop: "bottom top",
      scrub: 0.8,
    },
  });

  timeline.to(image, {
    y: "-80%",
    duration: 1,
  });
});

// Grid-image move 2
const gridImage2 = gsap.utils.toArray(".grid-item:nth-child(3n+2)");

gridImage2.forEach((image) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      stop: "bottom top",
      scrub: 1,
    },
  });

  timeline.to(image, {
    y: "-30%",
    duration: 1,
  });
});

// Grid-image move 1
const gridImage3 = gsap.utils.toArray(".grid-item:nth-child(3n+3)");
console.log(gridImage3);

gridImage3.forEach((image) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      stop: "bottom top",
      scrub: 1.5,
    },
  });

  timeline.to(image, {
    y: "-50%",
    duration: 1,
  });
});
