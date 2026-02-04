const slider = document.querySelector('.books-slider');
const prev = document.querySelector('.book-prev');
const next = document.querySelector('.book-next');
let scrollAmount = 0;
const slideWidth = 174; // عرض الكتاب + المارجن

prev.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - slideWidth, 0);
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

next.addEventListener('click', () => {
    scrollAmount = Math.min(scrollAmount + slideWidth, slider.scrollWidth - slider.clientWidth);
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});
