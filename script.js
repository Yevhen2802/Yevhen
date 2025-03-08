function createFallingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.innerHTML = "❤️";

  // Устанавливаем случайную позицию по ширине экрана и вертикальную позицию для начала падения
  const startLeft = Math.random() * window.innerWidth + "px";
  const startTop = Math.random() * 100 + "vh"; // Сердечко начнется в верхней части

  heart.style.left = startLeft;
  heart.style.top = startTop;
  
  // Устанавливаем случайную скорость падения
  const duration = Math.random() * 3 + 4; // Падение от 4 до 7 секунд
  heart.style.animationDuration = duration + "s";

  document.body.appendChild(heart);

  // Удаляем сердечко после завершения анимации
  setTimeout(() => {
      heart.remove();
  }, duration * 1000); // Удаляется после завершения анимации
}

// Создаём новые сердечки каждую 0.3 секунды
setInterval(createFallingHeart, 300);
