// Javascript for NavBar
window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Navigation Sidebar Menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

// Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    direction: "horizontal",
    lazyLoading: true,
    spaceBetween: 7,
    grabCursor: false,
    centeredSlides: true,
    loop: true,
    keyboard: {
        enabled: true,
    },

    // Responsive Breakpoints
    breakpoints:{
        320:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480:{
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },

    // Navigation Arrows
    navigation:{
        nextEl: ".swiper-custom-nav-next",
        prevEl: ".swiper-custom-nav-prev",
    },
});

// FAQ Section
function toggleAccordion(accordionId) {
    var accordionItem = document.getElementById(accordionId);
    var answer = accordionItem.querySelector(".answer");
    var arrow = accordionItem.querySelector(".fa-arrow-up");

    if(accordionItem.classList.contains("active")) {
        accordionItem.classList.remove("active");
        answer.style.maxHeight = "0";
        arrow.style.transform = "rotate(0deg)";
    }
    else {
        accordionItem.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        arrow.style.transform = "rotate(180deg)";
    }
}

// Index Parallax
document.addEventListener("DOMContentLoaded", function () {
    var heroPageImg = document.getElementsByClassName("hero-page-img");
    var aboutImg = document.getElementsByClassName("about-img");
    var propertyImg = document.getElementsByClassName("property-img");

    new simpleParallax(heroPageImg, {
        delay: 0.6,
        scale: 1.1,
        orientation: "right",
        transition: "cubic-bezier(0,0,0,1)",
    });

    new simpleParallax(aboutImg, {
        delay: 0.6,
        scale: 1.2,
        transition: "cubic-bezier(0,0,0,1)",
    });

    new simpleParallax(propertyImg, {
        delay: 0.6,
        scale: 1.1,
        orientation: "left",
        transition: "cubic-bezier(0,0,0,1)",
    });
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    easing: "ease-in-out",
});

sr.reveal("#hero-slogan");
sr.reveal("#hero-title", {delay: 400});
sr.reveal("#hero-description", {delay: 500});
sr.reveal("#hero-btn", {delay: 600});
sr.reveal(".hero-page-imgs", {delay: 700});
sr.reveal(".collab");
sr.reveal(".about-imgs");
sr.reveal(".about-headlines", {delay: 400});
sr.reveal(".about-projects", {delay: 500});
sr.reveal(".services");
sr.reveal("#properties-title");
sr.reveal("#properties-description", {delay: 400});
sr.reveal(".swiper", {delay: 500});
sr.reveal(".faq-header");
sr.reveal(".property-page");
sr.reveal(".service-page-title");
sr.reveal(".service-page-container", {delay: 600});
sr.reveal(".contact-headline");
sr.reveal(".contact-content", {delay: 600});

// FAQ Questions Reveal
const delayIncrement = 125;
totalQuestions = 5;

for(let i = 0; i <= totalQuestions; i++) {
    const selector = `#question${i}`;
    const delay = 400 + i * delayIncrement;

    sr.reveal(selector, {delay});
}
