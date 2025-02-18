$(document).ready(function(){
    $('.service__ready-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        dots: true,
        arrows: true,
        centerMode: true, 
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 768, // Для экранов <768px
                settings: {
                    slidesToShow: 1 // Показывать 1 слайд
                }
            }
        ]
    });

   
});