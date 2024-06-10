// ----- Variables -----

// Menu
const menuButton = document.querySelector(".menu-button")
const menu = document.querySelector("nav")

// Counter
const counters = document.querySelectorAll('.value');
const speed = 500;

//Carrousel
const prevButton = document.querySelector(".news .button-container button[aria-label='vorige']");
const nextButton = document.querySelector(".news .button-container button[aria-label='volgende']");
const carrousel = document.querySelector(".news ul");
const itemWidth = document.querySelector(".news li");
const paginationWrapper = document.querySelector('.news .button-container');

// ----- Functions -----

document.addEventListener("DOMContentLoaded", (event) => {

    // Menu

    menuButton.addEventListener('click', function(){
        menu.classList.toggle('menu-opened')
        document.documentElement.classList.toggle("no-scroll");
    })

    // Counter

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('target-value');
            const currentText = counter.innerText;
            const currentValue = +currentText.replace(/\D/g, ''); // Extract numeric value

            const increment = Math.ceil(value / speed);
            const newValue = currentValue + increment;

            if (newValue < value) {
                counter.innerText = `${newValue}+ leden`;
                setTimeout(animate, 10);
            } else {
                counter.innerText = `${value}+ leden`;
            }
        }

        animate();
    });

    if (carrousel && prevButton && nextButton && itemWidth && paginationWrapper) {
        prevButton.addEventListener("click", function () {
            if (carrousel.scrollLeft > 0) {
                carrousel.scrollBy({
                    left: -itemWidth.offsetWidth,
                    behavior: "smooth",
                });
            }
        });

        nextButton.addEventListener("click", function () {
            if (carrousel.scrollLeft + carrousel.clientWidth < carrousel.scrollWidth) {
                carrousel.scrollBy({
                    left: itemWidth.offsetWidth,
                    behavior: "smooth",
                });
            }
        });
    }
});
