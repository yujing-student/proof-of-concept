 playing()
 volume()
function playing() {
  // Get the video
    const audio = document.querySelector('.audio'); // Use querySelector for efficiency
    const playButton = document.querySelector('.playbutton');
    const pausebutton = document.querySelector('.pauzebutton');
    // .pauzebutton

    function togglePlayPause() {
        if (audio.paused) {
            console.log('video is playing')
            audio.play();
            pausebutton.classList.add('pauzebutton-open');
            playButton.classList.remove(playButton);
            playButton.classList.remove('pauzebutton');
        } else {
            audio.pause();
            pausebutton.classList.remove('pauzebutton-open');
        }
    }

    playButton.addEventListener('click', togglePlayPause);
}

 function volume () {
     const volume = document.querySelector('.volume');
     const audio = document.querySelector('.audio');

     volume.addEventListener('input', function() {
         audio.volume = volume.value / 10;
     });
 }
