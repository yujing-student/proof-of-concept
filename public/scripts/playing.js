const audio = document.querySelector('.audio');
const playButton = document.querySelector('.playbutton');
const pausebutton = document.querySelector('.pauzebutton');
const volumeInput = document.querySelector('.playlist__inputRange');

volume()
playButton.addEventListener('click', togglePlayPause);

// Check if Javascript is disabled
if (!window.script) {
    audio.classList.add('audio-hidden');
}
function togglePlayPause() {


    // feature detection of HTML5 audio
    if (window.Audio) {
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
        audio.classList.add('audio-open')
    } else {

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
    //todo  hier kijken naar intersectie observer ipv windowsscrolly
    const halfPage = document.documentElement.clientHeight / 2;


    if (scrollPosition >= halfPage) {
        backToTop.classList.add("backToTop-open");
        backToTop.classList.remove("backToTop");
    }
}


