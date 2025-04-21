document.getElementById("playButton").addEventListener("click", function() {
    let music = document.getElementById("music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
