
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('click', function() {
    var audio = document.getElementById('flower-audio');
    audio.muted = false; // Unmute the audio
    audio.play(); // Play the audio
});