document.addEventListener('DOMContentLoaded', function () {
    var scrollSections = document.querySelectorAll('.scroll-section');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScrollAnimation() {
        scrollSections.forEach(function (section) {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    document.addEventListener('scroll', handleScrollAnimation);
    document.addEventListener('resize', handleScrollAnimation);

    handleScrollAnimation();
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleIcon = document.getElementById('toggle-icon');
    var navList = document.querySelector('nav ul');

    function toggleNavList() {
        navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
    }

    toggleIcon.addEventListener('click', toggleNavList);

    window.addEventListener('resize', function () {
        if (window.innerWidth > 350) {
            navList.style.display = 'flex';
        } else {
            navList.style.display = 'none';
        }
    });
});

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { 
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


