gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('.service__container');
const blockWrapper = document.querySelector('.service__block-wrapper');
const imageWrapper = document.querySelector('.service__disc-image-wrapper');
const numberWrapper = document.querySelector('.service__block-number-wrapper');
const countItems = document.querySelectorAll('.service__block-count-item');
const itemsCount = document.querySelectorAll('.service__block-item').length;

let currentIndex = 0;
let isAnimating = false;
let isSectionActive = false;

// Проверка нахождения секции на экране
window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    isSectionActive = rect.top >= 0 && rect.bottom <= window.innerHeight;
});

window.addEventListener('wheel', (event) => {
    // Если секция не на экране — выходим
    if (!isSectionActive) return;

    // Проверка на первый и последний элементы для выхода из секции
    if (
        (currentIndex === 0 && event.deltaY < 0) || 
        (currentIndex === itemsCount - 1 && event.deltaY > 0)
    ) {
        isSectionActive = false;  // Разрешаем скролл страницы
        return;
    }

    // Блокируем скролл страницы
    event.preventDefault();

    // Блокируем множественную анимацию
    if (isAnimating) return;

    // Прокрутка внутри секции
    if (event.deltaY > 0 && currentIndex < itemsCount - 1) {
        currentIndex++;
    } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
    }

    isAnimating = true;

    // Анимации блоков
    gsap.to(blockWrapper, { y: -350 * currentIndex, duration: 0.5 });
    gsap.to(imageWrapper, { y: -421 * currentIndex, duration: 0.5 });
    gsap.to(numberWrapper, {
        y: -39 * currentIndex,
        duration: 0.5,
        onComplete: () => {
            isAnimating = false;
        }
    });

    countItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
    
}, { passive: false });


// Обработка клика по элементам переключения
