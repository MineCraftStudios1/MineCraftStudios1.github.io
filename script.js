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
        radius: Math.random() * 2,
        color: 'white',
        speed: Math.random() * 2 + 0.1,
      });
    }

    function drawStars() {
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < starCount; i++) {
        const star = stars[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = star.color;
        context.fill();
      }
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
