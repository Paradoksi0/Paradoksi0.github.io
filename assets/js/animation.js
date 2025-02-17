document.addEventListener("DOMContentLoaded", () => {
    let tl = gsap.timeline();

    tl.set(".welcome__title", { opacity: 0 }) // Текст скрыт в начале

    .to(".title-mask", { 
        duration: 0.2, 
        opacity: 1,
        x: "-100%",
        ease: "power2.out" 
    }) // Прямоугольник появляется

    .to(".title-mask", { 
        opacity: 1, // Прозрачность уходит в 0
        duration: 0.3, 
        x: "0%",
        ease: "power2.in"
    }, "+=0.2") // Ждём 0.2s перед исчезновением

    .to(".title-mask" , {
        opacity: 0,
        duration: 0.5,
        x: "0%",
        ease: "power2.in"
    }, "+=0.1")

    .to(".welcome__title", { 
        opacity: 1, 
        duration: 0.2, 
        ease: "power2.in"
    }, "-=0.2") // Текст проявляется одновременно с исчезновением маски

    .to(".welcome__disc", {
        opacity: 1,
        y: "0%",
        duration: 0.3,
        ease: "power2.out"
    })

    .to(".welcome__button" , { 
        opacity: 1,
        y: "0%",
        duration: 0.2,
        ease: "power2.out"
    });

    
});