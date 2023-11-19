const canvas = document.getElementById('space');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const starCount = 1000;

for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 2, // 设置较大的半径
    color: 'white',
    speed: Math.random() * 2 + 0.1,
    opacity: Math.random() // 设置随机透明度
  });
}

function drawStars() {
  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#6a5acd'); // 深紫色
  gradient.addColorStop(1, '#000033'); // 深蓝色
  context.fillStyle = gradient; // 设置渐变为星空背景色
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < starCount; i++) {
    const star = stars[i];
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`; // 使用随机透明度
    context.fill();
  }
  context.save()

  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, 100);
}

function updateStars() {
  for (let i = 0; i < starCount; i++) {
    stars[i].y -= stars[i].speed;
    if (stars[i].y < 0) {
      stars[i].y = canvas.height;
      stars[i].x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

animate();
