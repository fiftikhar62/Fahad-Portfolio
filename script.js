(function () {
    'use strict';

    // --- Navbar scroll transition (transparent → solid) ---
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

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // --- Scroll reveal animations ---
    var reveals = document.querySelectorAll('.reveal');

    if (reveals.length) {
        var revealObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        reveals.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    // --- Active nav link highlighting on scroll ---
    var sections = document.querySelectorAll('section[id]');
    var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    if (sections.length && navAnchors.length) {
        var activeObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var id = entry.target.getAttribute('id');
                        navAnchors.forEach(function (a) {
                            a.classList.remove('active');
                            if (a.getAttribute('href') === '#' + id) {
                                a.classList.add('active');
                            }
                        });
                    }
                });
            },
            { threshold: 0.2, rootMargin: '-64px 0px -40% 0px' }
        );

        sections.forEach(function (s) {
            activeObserver.observe(s);
        });
    }

    // --- Research carousel auto-rotate ---
    var carousel = document.querySelector('.research-carousel');
    if (carousel) {
        var slides = carousel.querySelectorAll('.research-slide');
        var current = 0;
        setInterval(function () {
            var prev = current;
            current = (current + 1) % slides.length;
            slides[prev].classList.remove('research-slide--active');
            slides[prev].classList.add('research-slide--exit');
            slides[current].classList.add('research-slide--active');
            slides[current].classList.remove('research-slide--exit');
            setTimeout(function () {
                slides[prev].classList.remove('research-slide--exit');
            }, 800);
        }, 3000);
    }

    // --- Parallax-lite on hero slideshow ---
    var slideshow = document.querySelector('.hero-slideshow');
    if (slideshow) {
        window.addEventListener('scroll', function () {
            var y = window.scrollY;
            if (y < window.innerHeight) {
                slideshow.style.transform = 'translateY(' + (y * 0.3) + 'px)';
            }
        });
    }

})();
