const slides = document.querySelectorAll('.slide');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.slider__dot');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide();

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * slides.length + 'px';
    slides.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlide();
    thisSlide(sliderCount);
};

function nextSlide() {
    sliderCount++;
    if (sliderCount >= slides.length) {
        sliderCount = 0;
    };
    rollSlide();
    thisSlide(sliderCount);

};

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) {
        sliderCount = slides.length - 1;
    };
    rollSlide();
    thisSlide(sliderCount);

};

function rollSlide() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};


function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
};

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlide();
        thisSlide(sliderCount);
    });
});

setInterval(() => {
    nextSlide()
}, 5000);