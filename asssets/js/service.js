

function animateSlides(index) {
    gsap.to(blockWrapper, { y: -350 * index, duration: 0.5 });
    gsap.to(imageWrapper, { y: -421 * index, duration: 0.5 });
    gsap.to(numberWrapper, { y: -39 * index, duration: 0.5 });
}

countItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (currentIndex === index) return;

        currentIndex = index;
        animateSlides(currentIndex);

        countItems.forEach((el, idx) => el.classList.toggle('active', idx === index));
    });
});