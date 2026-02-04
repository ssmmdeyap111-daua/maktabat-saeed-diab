
const slider = document.querySelector('.books-slider');
const prev = document.querySelector('.book-prev');
const next = document.querySelector('.book-next');

let scrollAmount = 0;
const slideWidth = 160; // عرض الكتاب + المارجن

prev.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - slideWidth, 0);
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

next.addEventListener('click', () => {
    scrollAmount += slideWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});
const slider = document.querySelector('.books-slider');
const prev = document.querySelector('.book-prev');
const next = document.querySelector('.book-next');

let scrollAmount = 0;
const slideWidth = 170;

next.addEventListener('click', () => {
    scrollAmount += slideWidth;
    slider.style.transform = `translateX(${scrollAmount}px)`;
});

prev.addEventListener('click', () => {
    scrollAmount -= slideWidth;
    slider.style.transform = `translateX(${scrollAmount}px)`;
});
