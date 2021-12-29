const hamburger = document.querySelector(".navbar-burger");
const navItems = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const userLink = document.querySelectorAll(".navbar__user-link");
const searchForm = document.querySelectorAll(".search-form");


hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
userLink.forEach(n => n.addEventListener("click", closeMenu));
searchForm.addEventListener()

function closeMenu() {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
}


