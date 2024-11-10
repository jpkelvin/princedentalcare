const menu_icon = document.querySelector(".mobile-menu-icon");
const nav_menu = document.querySelector(".nav-menu");

function mobileMenu() {
    menu_icon.classList.toggle("active");
    nav_menu.classList.toggle("active");
}

menu_icon.addEventListener("click",mobileMenu);

// when we click on menu_icon its close 

function closeMenu() {
    menu_icon.classList.remove("active");
    nav_menu.classList.remove("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

