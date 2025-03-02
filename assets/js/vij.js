document.addEventListener("DOMContentLoaded", function () {
    const yclientsButton = document.querySelector(".yButton.bottom.right");
    const titleSection = document.getElementById("Title");

    if (!yclientsButton || !titleSection) return;

    // Задаем начальные стили для анимации
    yclientsButton.style.transition = "opacity 0.3s ease, visibility 0.3s";
    yclientsButton.style.opacity = "1";
    yclientsButton.style.visibility = "visible";

    if (window.innerWidth > 768) {
        function toggleButtonVisibility() {
            const titleRect = titleSection.getBoundingClientRect();
            const isVisible = titleRect.top < window.innerHeight && titleRect.bottom > 0;
    
            if (isVisible) {
                yclientsButton.style.opacity = "0";
                yclientsButton.style.visibility = "hidden";
            } else {
                yclientsButton.style.opacity = "1";
                yclientsButton.style.visibility = "visible";
            }
        }
    } 
    

    // Проверка при загрузке и при скролле
    toggleButtonVisibility();
    window.addEventListener("scroll", toggleButtonVisibility);
});
