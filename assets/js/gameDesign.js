document.addEventListener("DOMContentLoaded", function () {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
        console.log('navToggle exists');
        navToggle.addEventListener('click', () => {
            console.log('Toggle clicked');
            navMenu.classList.add('show-menu')
        })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*=============== CHANGE BACKGROUND HEADER ===============*/
    const bgHeader = () => {
        const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
        this.scrollY >= 50 ? header.classList.add('bg-header')
            : header.classList.remove('bg-header')
    }
    window.addEventListener('scroll', bgHeader)

    
    
    
    const goalPrototype = document.getElementById('goalPrototype');
    const movementPrototype = document.getElementById('movementPrototype');
    const loadPrototype = document.getElementById('loadPrototype');
    const homePrototype = document.getElementById('homePrototype');

    loadPrototype.addEventListener('mouseenter', function () {
        loadPrototype.play();
    });

    loadPrototype.addEventListener('mouseleave', function () {
        loadPrototype.pause();
    });

    homePrototype.addEventListener('mouseenter', function () {
        homePrototype.play();
    });

    homePrototype.addEventListener('mouseleave', function () {
        homePrototype.pause();
    });

    goalPrototype.addEventListener('mouseenter', function () {
        goalPrototype.play();
    });

    goalPrototype.addEventListener('mouseleave', function () {
        goalPrototype.pause();
    });

    movementPrototype.addEventListener('mouseenter', function () {
        movementPrototype.play();
    });

    movementPrototype.addEventListener('mouseleave', function () {
        movementPrototype.pause();
    });


});