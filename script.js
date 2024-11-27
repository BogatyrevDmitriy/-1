// Скрипт для управления интерфейсом

// Функция смены темы
const toggleTheme = () => {
  document.body.classList.toggle('dark-theme');
};

// Добавляем кнопку для смены темы в футер
const footer = document.querySelector('.footer');
const themeButton = document.createElement('button');
themeButton.textContent = 'Сменить тему';
themeButton.style.padding = '10px 20px';
themeButton.style.marginTop = '10px';
themeButton.style.backgroundColor = '#4caf50';
themeButton.style.color = '#fff';
themeButton.style.border = 'none';
themeButton.style.cursor = 'pointer';

// Добавляем обработчик событий для смены темы
themeButton.addEventListener('click', toggleTheme);
footer.appendChild(themeButton);

// Добавление плавной прокрутки к разделам
const smoothScrollTo = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  }
};

// Пример использования плавной прокрутки
const headerLinks = document.querySelectorAll('.footer a');
headerLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').replace('#', '');
    smoothScrollTo(targetId);
  });
});

// Добавляем класс "dark-theme" для ночного режима
document.body.classList.add('dark-theme');
