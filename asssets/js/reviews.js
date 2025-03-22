const reviewsList = document.querySelector('.reviews__list');
const reviewsItems = document.querySelectorAll('.reviews__item');
const prevButton = document.querySelector('.reviews__button-1');
const nextButton = document.querySelector('.reviews__button-2');

let currentIndexSlider = 0;

// Получаем значение gap из стилей
const getGap = () => {
    return parseFloat(window.getComputedStyle(reviewsList).gap) || 0;
};

// Функция для обновления позиции с учётом gap
function updateSlider() {
    const itemWidth = reviewsItems[0].offsetWidth;
    const gap = getGap();
    const offset = currentIndexSlider * (itemWidth + gap);

    reviewsList.style.transform = `translateX(${-offset}px)`;
}

// Клик по кнопке "Назад"
prevButton.addEventListener('click', () => {
    if (currentIndexSlider > 0) {
        currentIndexSlider--;
        updateSlider();
    }
});

// Клик по кнопке "Вперёд"
nextButton.addEventListener('click', () => {
    if (currentIndexSlider < reviewsItems.length - 3) {
        currentIndexSlider++;
        updateSlider();
    }
});



// Адаптивность при изменении размера экрана
window.addEventListener('resize', updateSlider);
