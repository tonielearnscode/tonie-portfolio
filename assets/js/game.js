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
    
    
    
    // Get the elements
    const forwardBtn = document.getElementById('forwardBtn');
    const backwardBtn = document.getElementById('backwardBtn');
    const loadingPrototype = document.getElementById('loadingPrototype');
    const growthPrototype = document.getElementById('growthPrototype');
    const leftforwardBtn = document.getElementById('leftforwardBtn');
    const leftbackwardBtn = document.getElementById('leftbackwardBtn');
    const twofactorAuth = document.getElementById('twofactorAuth');
    const pinJournal = document.getElementById('pinJournal');
    const loginPrototype = document.getElementById('loginPrototype');
    const createGoal = document.getElementById('createGoal');

    console.log('loadingPrototype:', loadingPrototype);
    console.log('twofactorAuth:', twofactorAuth);

    forwardBtn.addEventListener("click", function () {
        console.log('Button clicked');
        if (loadingPrototype) {
            console.log('Hiding loadingPrototype')
            loadingPrototype.style.display = "none";
        }

        if (growthPrototype) {
            console.log('Showing growthPrototype');
            growthPrototype.style.display = "block";
        }

        if (forwardBtn) {
            forwardBtn.classList.add("gray-forward");
            forwardBtn.disabled = true;
        }

        if (backwardBtn) {
            backwardBtn.classList.remove("gray-backward");
            backwardBtn.disabled = false;
        }
    });

    backwardBtn.addEventListener("click", function () {
        console.log('Button clicked');
        if (loadingPrototype) {
            loadingPrototype.style.display = "block";
        }

        if (growthPrototype) {
            growthPrototype.style.display = "none";
        }

        if (backwardBtn) {
            backwardBtn.classList.add("gray-backward");
            backwardBtn.disabled = true;
        }

        if (forwardBtn) {
            forwardBtn.classList.remove("gray-forward");
            forwardBtn.disabled = false;
        }
    });

    leftforwardBtn.addEventListener("click", function () {
        if (twofactorAuth) {
            console.log('Hiding twofactor auth');
            twofactorAuth.style.display = "none";
        }

        if (pinJournal) {
            console.log('Showing pin journal');
            pinJournal.style.display = "block";
        }

        if (leftforwardBtn) {
            leftforwardBtn.classList.add("gray-forward");
            leftforwardBtn.disabled = true;
        }

        if (leftbackwardBtn) {
            leftbackwardBtn.classList.remove("gray-backward");
            leftbackwardBtn.disabled = false;
        }
    });

    leftbackwardBtn.addEventListener("click", function () {
        console.log('Button clicked');
        if (twofactorAuth) {
            twofactorAuth.style.display = "block";
        }

        if (pinJournal) {
            pinJournal.style.display = "none";
        }

        if (leftbackwardBtn) {
            leftbackwardBtn.classList.add("gray-backward");
            leftbackwardBtn.disabled = true;
        }

        if (leftforwardBtn) {
            leftforwardBtn.classList.remove("gray-forward");
            leftforwardBtn.disabled = false;
        }
    });

    loadingPrototype.addEventListener('mouseenter', function () {
        loadingPrototype.pause();
    });

    loadingPrototype.addEventListener('mouseleave', function () {
        loadingPrototype.play();
    });

    growthPrototype.addEventListener('mouseenter', function () {
        growthPrototype.pause();
    });

    growthPrototype.addEventListener('mouseleave', function () {
        growthPrototype.play();
    });

    twofactorAuth.addEventListener('mouseenter', function () {
        twofactorAuth.pause();
    });

    twofactorAuth.addEventListener('mouseleave', function () {
        twofactorAuth.play();
    });

    pinJournal.addEventListener('mouseenter', function () {
        pinJournal.pause();
    });

    pinJournal.addEventListener('mouseleave', function () {
        pinJournal.play();
    });

    loginPrototype.addEventListener('mouseenter', function () {
        loginPrototype.pause();
    });

    loginPrototype.addEventListener('mouseleave', function () {
        loginPrototype.play();
    });

    createGoal.addEventListener('mouseenter', function () {
        createGoal.pause();
    });

    createGoal.addEventListener('mouseleave', function () {
        createGoal.play();
    });
});

