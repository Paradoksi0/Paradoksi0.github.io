$(document).ready(function () {
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $('#header').outerHeight();

    $(window).scroll(function () {
        if ($(window).width() < 710) { 
            var isFlex = $('.header__list').css('display') === 'flex';
            if (isFlex) { 

            } else { 
                var scroll = $(this).scrollTop();
                if (Math.abs(lastScrollTop - scroll) <= delta)
                    return;
        
                if (scroll > lastScrollTop && scroll > headerHeight) {
                    
                    
                    $('#header').removeClass('header-down').addClass('header-up');
                    $('#toggleBtn').removeClass('header-down').addClass('header-up');
                } else {
                   
                    if (scroll + $(window).height() < $(document).height()) {
                        $('#header').removeClass('header-up').addClass('header-down');
                        $('#toggleBtn').removeClass('header-up').addClass('header-down');
                    }
                }
                lastScrollTop = scroll;
            }
            
        };
        
    });

    if ($(window).width() > 710) {
        $('#toggleBtn').click(function () {
            $('.wrapper').toggleClass('active');
            $('#header').toggleClass('active');
            $('.header__button').toggleClass('active');
            if ($('.header__button').hasClass('active')) {
                // $('.header__button').html('&#10006;'); X
            } else {
                // $('.header__button').html('&#9776;'); 3
            }
        });
    } else {
        $('#toggleBtn').on('click', function () {
            $('.header__list').slideToggle(500, function () {

            }).css('display', 'flex');
            $('.header__button').toggleClass('active');
        });
    }
});
