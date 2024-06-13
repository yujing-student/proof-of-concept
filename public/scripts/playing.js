const audio = document.querySelector('.audio');
const playButton = document.querySelector('.playbutton');
const pausebutton = document.querySelector('.pauzebutton');
const volumeInput = document.querySelector('.playlist__inputRange');

volume()
playButton.addEventListener('click', togglePlayPause);


function togglePlayPause() {
    if (audio.paused) {
        console.log('video is playing')
        audio.play();

        if (document.startViewTransition) {
            document.startViewTransition(function () {
                playButton.classList.remove('grow')
                pausebutton.classList.add('pauzebutton-open');
                playButton.classList.remove('pauzebutton');
            });
        } else {
            playButton.classList.remove('grow')
            pausebutton.classList.add('pauzebutton-open');
            playButton.classList.remove('pauzebutton');
        }


    } else {
        audio.pause();
        playButton.classList.add('grow')
        pausebutton.classList.remove('pauzebutton-open');
    }
}

function volume() {

    volumeInput.addEventListener('input', function () {
        audio.volume = volumeInput.value / 10;
    });
}


// deze functie werkt niet het idee is dat het pijltje aan de zijkant pas zichtbaar is als je naar beneden scrollt
function toggleBackToTop() {
    const backToTop = document.querySelector(".backToTop");
    const scrollPosition = window.scrollY;
    const halfPage = document.documentElement.clientHeight / 2;

    if (scrollPosition >= halfPage) {
        backToTop.classList.add("backToTop-open");
        backToTop.classList.remove("backToTop");
    }
}


