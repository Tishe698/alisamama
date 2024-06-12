const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const prevBtn = carousel.querySelector('.prevBtn');
const nextBtn = carousel.querySelector('.nextBtn');
const dots = carousel.querySelectorAll('.dot');

let slideIndex = 0;
let totalSlides = slides.querySelectorAll('img').length;

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  const slideWidth = carousel.clientWidth;
  slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
