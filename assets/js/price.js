document.addEventListener("DOMContentLoaded", function () {
    const priceList = document.querySelector(".price__list");
    const items = document.querySelectorAll(".price__item");
    const arrowLeft = document.getElementById("priceArrowLeft");
    const arrowRight = document.getElementById("priceArrowRight");
    const currentSlide = document.getElementById("priceListCurrent");
    const totalSlides = document.getElementById("priceListAll");

    let index = 0;
    let startX = 0;
    let isDragging = false;

    function getItemWidth() {
        if (window.innerWidth < 768) {
            return items[0].offsetWidth + 60;
        } else if (window.innerWidth < 1500) {
            return items[0].offsetWidth + 40;
        } else {
            return items[0].offsetWidth + 60;
        }
    }

    function getItemsPerSlide() {
        return window.innerWidth < 768 ? 1 : 3;
    }

    function updateSlider() {
        const itemWidth = getItemWidth();
        const itemsPerSlide = getItemsPerSlide();
        const total = Math.ceil(items.length / itemsPerSlide);

        priceList.style.transform = `translateX(-${index * itemWidth * itemsPerSlide}px)`;
        currentSlide.textContent = index + 1;
        totalSlides.textContent = total;
    }

    arrowRight.addEventListener("click", function () {
        const itemsPerSlide = getItemsPerSlide();
        const total = Math.ceil(items.length / itemsPerSlide);
        if (index < total - 1) {
            index++;
            updateSlider();
        }
    });

    arrowLeft.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    // **Свайп**
    priceList.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    priceList.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const moveX = e.touches[0].clientX;
        const diff = startX - moveX;
        const itemsPerSlide = getItemsPerSlide();
        const total = Math.ceil(items.length / itemsPerSlide);
    
        if (diff > 50 && index < total - 1) { // Проверяем, чтобы index не превышал максимальное значение
            index++;
            isDragging = false;
            updateSlider();
        } else if (diff < -50 && index > 0) { // Проверяем, чтобы index не уходил в минус
            index--;
            isDragging = false;
            updateSlider();
        }
    });

    priceList.addEventListener("touchend", () => {
        isDragging = false;
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
});
