const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navbar__content");
const navLink = document.querySelectorAll(".nav-link");
const userLink = document.querySelectorAll(".navbar__user-link");


hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
userLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
}


