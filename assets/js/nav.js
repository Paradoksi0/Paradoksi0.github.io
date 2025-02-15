document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.header__item');
    var sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        menuItems.forEach(function (item) {
            item.classList.remove('active');
        });

        var titleItem = document.querySelector('[data-section="Title"]');
        if (titleItem) {
            titleItem.classList.add('active');
        }
    } else {
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - windowHeight / 2;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Set the active class for the corresponding menu item
                menuItems.forEach(function (item) {
                    item.classList.remove('active');
                });

                var targetItem = document.querySelector('[data-section="' + section.id + '"]');
                if (targetItem) {
                    targetItem.classList.add('active');
                }
            }
        });
    }
    });


    menuItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            var targetSectionId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.header__list').clientHeight,
                    behavior: 'smooth'
                });

                // Set the active class for the clicked menu item
                menuItems.forEach(function (item) {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
});