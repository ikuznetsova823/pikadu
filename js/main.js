// Создаем переменную, в которую вложим меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную в которую вложим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event){
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle('visible');
})
