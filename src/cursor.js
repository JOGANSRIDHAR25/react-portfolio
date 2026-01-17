const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let x = 0, y = 0;
let targetX = 0, targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateCursor() {
  x += (targetX - x) * 0.15;
  y += (targetY - y) * 0.15;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();
