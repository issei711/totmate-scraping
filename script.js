// GSAPでホバーアニメーション
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

// Canvasで動く背景（波動的なエフェクト）
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waves = [];

for (let i = 0; i < 100; i++) {
  waves.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let w of waves) {
    ctx.beginPath();
    ctx.arc(w.x, w.y, w.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fill();
    w.x += w.dx;
    w.y += w.dy;

    // 跳ね返り
    if (w.x < 0 || w.x > canvas.width) w.dx *= -1;
    if (w.y < 0 || w.y > canvas.height) w.dy *= -1;
  }
  requestAnimationFrame(animate);
}

animate();

// リサイズ対応
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
