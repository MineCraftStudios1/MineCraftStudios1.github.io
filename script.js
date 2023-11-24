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
  gradient.addColorStop(colorStop, '#6a5acd'); // 根据 colorStop 添加颜色停止位置
  gradient.addColorStop((colorStop + 0.5) % 1, '#000033'); // 设置第二个颜色停止位置，产生循环变化
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

let colorStop = 0; // 初始颜色停止位置

function updateColorStop() {
  colorStop += 0.001; // 可以调整颜色变化的速度
  colorStop %= 1; // 保证颜色停止位置在 0 到 1 之间循环
}

function animate() {
  drawStars();
  updateStars();
  updateColorStop(); // 更新颜色停止位置
  requestAnimationFrame(animate);
}

animate();
