const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hint = document.getElementById('hint');

let tries = 0;

// Наведение на "Нет"
noBtn.addEventListener('mouseover', () => {
  tries++;

  hint.textContent = 'Не туда смотришь 😜';

  // Убегаем
  noBtn.style.position = 'absolute';
  noBtn.style.left = Math.random() * 80 + 'vw';
  noBtn.style.top = Math.random() * 80 + 'vh';

  // Увеличиваем "Да"
  yesBtn.style.transform = `scale(${1 + tries * 0.15})`;
});

// Клик по "Да"
yesBtn.addEventListener('click', () => {
  window.location.href = 'yes_page.html';
});
