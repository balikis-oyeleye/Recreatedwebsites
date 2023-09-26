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

// animation
const timeline = gsap.timeline({ defaults: { opacity: 0 } });

timeline
  .from(".hero-header .words", {
    y: 180,
    stagger: 0.05,
    ease: "power2.out",

    duration: 1,
  })
  .from(
    ".hero-text .first",
    { y: 180, stagger: 0.3, ease: "power2.out" },
    "-=0.4"
  )
  .from(
    ".hero-text .second",
    { y: 180, stagger: 0.3, ease: "power2.out" },
    "<0.1"
  );

// sequence animation

const html = document.documentElement;
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const currentFrame = (index) =>
  `https://zelt.app/assets/img/home/hero/sequence/${index}.webp`;

const frameCount = 118;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const img = new Image();
img.src = currentFrame(1);

img.onload = function () {
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
};

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );
  requestAnimationFrame(() => updateImage(frameIndex + 1));

  preloadImages();
});
