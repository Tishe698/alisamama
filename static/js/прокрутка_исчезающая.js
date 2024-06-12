// Функция для обработки события прокрутки страницы
function handleScroll() {
    const elementsToShow = document.querySelectorAll('.block2'); // Выберите элементы, которые нужно показать
    const elementsToHide = document.querySelectorAll('.block2.hidden'); // Выберите элементы, которые нужно скрыть
    const threshold = window.innerHeight * 0.8; // Когда элемент находится в 80% видимости, мы анимируем его

    // Показываем элементы .block2, если они в зоне видимости
    elementsToShow.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < threshold && elementTop > -element.offsetHeight) {
            element.classList.remove('hidden');
        }
    });

    // Скрываем элементы .block2, если они не в зоне видимости
    elementsToHide.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop > 0 || elementTop < -element.offsetHeight) {
            element.classList.add('hidden');
        }
    });
}

// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', handleScroll);

// Вызываем функцию обработки события прокрутки для начального состояния страницы
handleScroll();