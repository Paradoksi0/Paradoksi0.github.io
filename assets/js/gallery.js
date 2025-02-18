document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".gallery__slider");
    const slides = document.querySelectorAll(".gallery__slider-item");
    const prevBtn = document.getElementById("galleryArrowLeft");
    const nextBtn = document.getElementById("galleryArrowRight");
    const progressBar = document.getElementById("galleryProgressCount");

    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + 40; // ширина + gap 40px

    let startX = 0;
    let isDragging = false;

    function updateSlider() {
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
        progressBar.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;

        prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
        nextBtn.style.opacity = currentIndex === totalSlides - 1 ? "0.5" : "1";
    }

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // **Свайп**
    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    slider.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const moveX = e.touches[0].clientX;
        const diff = startX - moveX;

        if (diff > 50 && currentIndex < totalSlides - 1) {
            currentIndex++;
            isDragging = false;
            updateSlider();
        } else if (diff < -50 && currentIndex > 0) {
            currentIndex--;
            isDragging = false;
            updateSlider();
        }
    });

    slider.addEventListener("touchend", () => {
        isDragging = false;
    });

    updateSlider();
});
