(function () {
    'use strict';

    // --- Navbar scroll transition (only on homepage with hero) ---
    var navbar = document.getElementById('navbar');
    var hero = document.getElementById('hero');

    if (hero && navbar) {
        function updateNavbar() {
            var heroBottom = hero.offsetTop + hero.offsetHeight;
            if (window.scrollY > heroBottom - 80) {
                navbar.classList.remove('navbar--transparent');
                navbar.classList.add('navbar--solid');
            } else {
                navbar.classList.remove('navbar--solid');
                navbar.classList.add('navbar--transparent');
            }
        }
        window.addEventListener('scroll', updateNavbar);
        updateNavbar();
    }

    // --- Hamburger toggle ---
    var hamburger = document.getElementById('navHamburger');
    var navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        // Close mobile nav on link click
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // --- Fade-in on scroll ---
    var fadeSections = document.querySelectorAll('.fade-section');
    if (fadeSections.length) {
        var fadeObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.08 }
        );
        fadeSections.forEach(function (section) {
            fadeObserver.observe(section);
        });
    }
})();
