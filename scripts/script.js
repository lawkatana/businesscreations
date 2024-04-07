//==============================================================
// navbar script
//=================================================================

// Get the navbar
var hero = document.getElementById("hero");
var navbar = document.getElementById("sticky-navbar");
var mainNav = document.getElementById("main-nav");

// When the user scrolls the page, execute stickyNav
window.onscroll = function() {
    stickyNav();
};
    
// Get the offset position of the navbar
var appear = mainNav.offsetHeight + 100;

// Add the appear class to the navbar when you reach its scroll position
function stickyNav() {
    if (window.scrollY >= appear) {
        navbar.classList.add("appear");
    } else {
        navbar.classList.remove("appear");
    }
}



//==============================================================
// counter script
//=================================================================

// Function to animate the counter
function animateCounter(element, start, end, duration) {
    let startTime = null;

    const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
        window.requestAnimationFrame(step);
    }
    };

    window.requestAnimationFrame(step);
}

// Detect when the user scrolls to the counter section
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const counterElement = entry.target;
        const targetValue = +counterElement.getAttribute('data-target');
        animateCounter(counterElement, 0, targetValue, 3000);
        observer.unobserve(counterElement);
    }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Target the elements to be observed
const counterElements = document.querySelectorAll('.counter');
counterElements.forEach(el => observer.observe(el));




//==============================================================
// about tabs script
//=================================================================
    
// Get the tab buttons and the tab panes
var tabButtons = document.getElementsByClassName("tab-button");
var tabPanes = document.getElementsByClassName("tab-pane");

// Define a function to open a tab
function openTab(event, tabName) {
    // Loop through all the tab buttons and remove the active class
    for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Loop through all the tab panes and hide them
    for (var i = 0; i < tabPanes.length; i++) {
    tabPanes[i].className = tabPanes[i].className.replace(" active", "");
    }

    // Add the active class to the current button and the corresponding tab pane
    event.currentTarget.className += " active";
    document.getElementById(tabName).className += " active";
}

// ===============================================
// team and posts js
// ===============================================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: false,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: false,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


// ===============================================
// clients
// ===============================================
$('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true
})