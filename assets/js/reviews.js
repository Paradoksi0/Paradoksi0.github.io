$(document).ready(function(){
    $('.reviews__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        dots: true,
        arrows: true,
        centerMode: true, 
        centerPadding: "0px"
    });
});