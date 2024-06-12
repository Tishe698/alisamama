const toglerBtn = document.querySelector('.togler_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toglerBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
})