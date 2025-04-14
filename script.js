// ボタンホバーアニメーション
const button = document.querySelector(".rich-button");

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.1,
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    duration: 0.3,
    ease: "power2.out"
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1.0,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    duration: 0.3,
    ease: "power2.out"
  });
});

// VANTA.js 背景（waves）
VANTA.WAVES({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x6e8efb,
  shininess: 50.00,
  waveHeight: 20.00,
  waveSpeed: 1.0,
  zoom: 1.0
});
