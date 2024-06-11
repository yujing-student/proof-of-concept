 playing()

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

