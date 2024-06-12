const items = document.querySelectorAll('.item');

items.forEach(item => {
  const title = item.querySelector('.title');
  const content = item.querySelector('.content');
  const icon = item.querySelector('.icon');

  title.addEventListener('click', () => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.textContent = '-';
    }
  });
});
