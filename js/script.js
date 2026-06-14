let logo = document.getElementById('header-logo');
let headerButtons = document.querySelectorAll('#navbar a');
let homeButton = headerButtons[0];
let menuButton = headerButtons[1];
let orderButton = headerButtons[2];
let rewardsButton = headerButtons[3];
let aboutUsButton = headerButtons[4];

logo.onclick = () => {
    if (homeButton.classList.contains('active') == true) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

homeButton.onclick = () => {
    if (homeButton.classList.contains('active') == true) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

let hamburger = document.getElementById("hamburger");
let navbarPopup = document.getElementById("navbar-popup");
hamburger.addEventListener("click", function() {
    if (navbarPopup.classList.contains("hidden") == true) {
        navbarPopup.classList.remove("hidden");
        navbarPopup.classList.add("show");
    }
    else {
        navbarPopup.classList.add("hidden");
        navbarPopup.classList.remove("show");
    }
})