const openBtns = document.querySelectorAll('.nazmi_form');

// Перебираем найденные элементы
openBtns.forEach(function(btn) {

  // Вешаем обработчик на каждый
  btn.addEventListener('click', function() {

    // Показываем модальное окно
    modal.style.display = 'block';

  });

});

// Элемент модального окна
const modal = document.getElementById('modal');

// Кнопка закрытия
const closeBtn = document.querySelector('.close');

// Закрытие окна
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Закрытие по клику вне окна
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});