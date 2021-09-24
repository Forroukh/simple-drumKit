

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    if (audio) {
        audio.play()
        audio.currentTime = 0;
    }
    else {
        return
    }

})