const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function(e) {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-x" : "fa-solid fa-burger");
});

navLinks.addEventListener("click", function(e) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-burger");
});