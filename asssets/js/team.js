const teamList = document.querySelector('.team__list');
const teamItems = document.querySelectorAll('.team__item');
const prevButtonTeam = document.querySelector('.team__button-1');
const nextButtonTeam = document.querySelector('.team__button-2');

let currentIndexSliderTeam = 0;

// Получаем значение gap из стилей
const getGapTeam = () => {
    return parseFloat(window.getComputedStyle(teamList).gap) || 0;
};

// Функция для обновления позиции с учётом gap
function updateSliderTeam() {
    const itemWidth = teamItems[0].offsetWidth;
    const gap = getGapTeam();
    const offset = currentIndexSliderTeam * (itemWidth + gap);

    teamList.style.transform = `translateX(${-offset}px)`;
}

// Клик по кнопке "Назад"
prevButtonTeam.addEventListener('click', () => {
    if (currentIndexSliderTeam > 0) {
        currentIndexSliderTeam--;
        updateSliderTeam();
    }
});

// Клик по кнопке "Вперёд"
nextButtonTeam.addEventListener('click', () => {
    if (currentIndexSliderTeam < teamItems.length - 3) {
        currentIndexSliderTeam++;
        updateSliderTeam();
    }
});



// Адаптивность при изменении размера экрана
window.addEventListener('resize', updateSliderTeam);
