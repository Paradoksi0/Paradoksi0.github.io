document.addEventListener("DOMContentLoaded", function () {
    const priceList = document.querySelector(".price__list");
    const items = document.querySelectorAll(".price__item");
    const arrowLeft = document.getElementById("priceArrowLeft");
    const arrowRight = document.getElementById("priceArrowRight");
    const currentSlide = document.getElementById("priceListCurrent");
    const totalSlides = document.getElementById("priceListAll");

    let index = 0;
    const total = items.length / 3;
    const itemWidth = items[0].offsetWidth + 60; // Ширина блока + отступ
    totalSlides.textContent = total;

    function updateSlider() {
        priceList.style.transform = `translateX(-${index * itemWidth * 3}px)`;
        currentSlide.textContent = index + 1;
    }

    arrowRight.addEventListener("click", function () {
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

    updateSlider();
});
