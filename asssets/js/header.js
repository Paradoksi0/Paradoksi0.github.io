const header = document.getElementById('header');
const welcomeSection = document.getElementById('welcome');

function updateHeaderBackground() {
    const sectionRect = welcomeSection.getBoundingClientRect();

    // Если нижняя граница секции выше верхней границы окна — секция вне экрана
    if (sectionRect.bottom <= 0) {
        header.style.background = 'rgba(101, 101, 101, 0.9)';
    } else {
        header.style.background = 'transparent';
    }
}

// Проверка при скролле
window.addEventListener('scroll', updateHeaderBackground);

// Проверка при загрузке страницы
window.addEventListener('DOMContentLoaded', updateHeaderBackground);