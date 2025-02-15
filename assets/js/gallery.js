document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".gallery__slider");
    const slides = document.querySelectorAll(".gallery__slider-item");
    const prevBtn = document.getElementById("galleryArrowLeft");
    const nextBtn = document.getElementById("galleryArrowRight");
    const progressBar = document.getElementById("galleryProgressCount");

    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + 40; // ширина + gap 40px

    // Функция обновления слайдера
    function updateSlider() {
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
        
        // Обновление прогресс-бара
        const progress = ((currentIndex + 1) / totalSlides) * 100;
        progressBar.style.width = `${progress}%`;

        // Блокируем кнопки, если достигнут край
        prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
        nextBtn.style.opacity = currentIndex === totalSlides - 1 ? "0.5" : "1";
    }

    // Кнопка "Влево"
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Кнопка "Вправо"
    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Первоначальное обновление
    updateSlider();
});