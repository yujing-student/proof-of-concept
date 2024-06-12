// ----- Variables -----

const body = document.querySelector("body")

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

// Vacatures
const vacancyContainer = document.querySelector('.vacancy-container');
const vacancies = document.querySelectorAll('.vacancy');

// ----- Code logic -----

document.addEventListener("DOMContentLoaded", (event) => {

    // Menu

    menuButton.addEventListener('click', function(){
        menu.classList.toggle('menu-opened')
        body.classList.toggle("menuOpen");
        document.documentElement.classList.toggle("no-scroll");
    })

    // Counter

    if (counters) {
        counters.forEach(counter => {
            // Reset counter to 0 for animation
            counter.innerText = "0+ leden";

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
            };

            animate();
        });
    }

    // Carrousel buttons

    body.classList.add('js-enabled');

    // Carrousel

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

    // Dynamische hoogt vacatures berekenen
    
    if (vacancies.length > 0) {
        const firstVacancy = vacancies[0];
        const vacancyHeight = firstVacancy.offsetHeight;
        const gap = parseFloat(getComputedStyle(vacancyContainer).gap);
        
        // Update --vacancy-height variable
        document.documentElement.style.setProperty('--vacancy-height', `${vacancyHeight}px`);
        
        // Calculate the max height to show 3 vacancies including the gap
        const maxHeight = (vacancyHeight * 3) + (gap * 3);
        
        // Set the max-height of the list-view container
        document.querySelector('.list-view-container').style.maxHeight = `${maxHeight}px`;
    }

    const logoList = document.querySelector('.members ul');
    const logos = Array.from(logoList.children);
    const numLogos = logos.length;

    // Clone logos and append to the end for seamless scroll
    logos.forEach(logo => {
        logoList.appendChild(logo.cloneNode(true));
    });

    // Calculate and set the width of the logo list
    const logoWidth = logos[0].offsetWidth;
    const totalWidth = logoWidth * numLogos * 2; // Twice for the cloned set
    logoList.style.width = `${totalWidth}px`;

    // Set animation duration based on total width
    const animationSpeed = totalWidth / 100; // Adjust this value for desired speed
    logoList.style.animationDuration = `${animationSpeed}s`;

});
