/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
   
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
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

const galleryImages = document.querySelectorAll(".wireframeImage-container");
const galleryVideos = document.querySelectorAll(".video-container");
const modal = document.getElementById("myModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");
const modalContent = document.querySelector(".modal-content");

galleryVideos.forEach((videoContainer) => {
    const video = videoContainer.querySelector("source");
    const caption = videoContainer.querySelector(".caption");
    const overlay = videoContainer.querySelector(".video-overlay");

    videoContainer.addEventListener("click", () => {
        modal.style.display = "block";
        modalVideo.src = video.src;
        modalVideo.play();

        modalContent.style.width = "70%";

    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        modalVideo.pause();

        modalContent.style.width = "100%";

    });

    videoContainer.addEventListener("mouseenter", () => {
        overlay.style.opacity = 1;
        caption.style.display = "block"; // Hide the default caption
    });

    videoContainer.addEventListener("mouseleave", () => {
        overlay.style.opacity = 0;
        caption.style.display = "none"; // Show the default caption
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const personalizationPrototype = document.getElementById('personalizationPrototype');
    const securityVideo = document.getElementById('securityVideo');
    const loginPrototype = document.getElementById('loginPrototype');
    const createGoal = document.getElementById('createGoal');

    personalizationPrototype.addEventListener('mouseenter', function () {
        personalizationPrototype.pause();
    });

    personalizationPrototype.addEventListener('mouseleave', function () {
        personalizationPrototype.play();
    });

    securityVideo.addEventListener('mouseenter', function () {
        securityVideo.pause();
    });

    securityVideo.addEventListener('mouseleave', function () {
        securityVideo.play();
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

