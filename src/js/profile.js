document.addEventListener("DOMContentLoaded", () => {
    const profile = document.getElementById("profile")?.innerHTML;
    profile === "{}" ? location.href = "404" : null;
    const avatar = document.getElementById("avatar");
    const audio = document.getElementById("audio");
    let playing = false;
    avatar?.addEventListener("click", () => {
        playing ? audio.pause() : audio.play();
        playing = !playing;
    });
    audio?.addEventListener("ended", () => {
        playing = false;
    });
});