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

/*=====================Popup=========================*/
document.addEventListener("DOMContentLoaded", function () {
    const galleryVideos = document.querySelectorAll(".video-container");
    const modal = document.getElementById("myModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeModal = document.getElementById("closeModal");
    const modalContent = document.querySelector(".modal-content");


    galleryVideos.forEach((videoContainer) => {
        const video = videoContainer.querySelector("source");
        const overlay = videoContainer.querySelector(".video-overlay");
        const caption = videoContainer.querySelector(".caption");

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
});
