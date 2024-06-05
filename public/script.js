// Variables
const menuButton = document.querySelector(".menu-button")
const menu = document.querySelector("nav")

document.addEventListener("DOMContentLoaded", (event) => {
    menuButton.addEventListener('click', function(){
        menu.classList.toggle('menu-opened')
        document.documentElement.classList.add("no-scroll");
    })
});