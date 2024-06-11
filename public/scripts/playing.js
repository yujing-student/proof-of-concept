 playing()
hamburger()

function playing() {
  // Get the video
    const audio = document.querySelector('.audio'); // Use querySelector for efficiency
    const playButton = document.querySelector('.pauzebutton');
    // .pauzebutton

    function togglePlayPause() {
        if (audio.paused) {
            console.log('video is playing')
            audio.play();
            playButton.classList.add('pauzebutton-open');
            playButton.classList.remove(playButton);
            playButton.classList.remove('pauzebutton');
        } else {
            audio.pause();
            playButton.classList.remove('pauzebutton-open');
        }
    }

    playButton.addEventListener('click', togglePlayPause);
}

function hamburger (){
    let eersteStreepjesButton = document.querySelector("section.streepjes li:nth-of-type(1) button");
    eersteStreepjesButton.onclick = eersteStreepjesButtonKlik;
    function eersteStreepjesButtonKlik() {
        if (eersteStreepjesButton.ariaExpanded == "false") {
            eersteStreepjesButton.ariaExpanded = "true"
        }
        else {
            eersteStreepjesButton.ariaExpanded = "false"
        }
    }
    eersteStreepjesButtonKlik();
}
