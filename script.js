// ---------------- PRELOADER ----------------
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if(loader) loader.style.display = "none";
});

// ---------------- COUNTDOWN ----------------
function countdownTimer(targetDate) {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if(distance < 0){
            clearInterval(interval);
            if(daysEl) daysEl.innerHTML = "0";
            if(hoursEl) hoursEl.innerHTML = "0";
            if(minutesEl) minutesEl.innerHTML = "0";
            if(secondsEl) secondsEl.innerHTML = "0";
            return;
        }

        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((distance % (1000*60)) / 1000);

        if(daysEl) daysEl.innerHTML = days;
        if(hoursEl) hoursEl.innerHTML = hours;
        if(minutesEl) minutesEl.innerHTML = minutes;
        if(secondsEl) secondsEl.innerHTML = seconds;
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
}

// Initialize countdown to wedding date
const weddingDate = new Date("November 27, 2025 00:00:00").getTime();
countdownTimer(weddingDate);

// ---------------- MUSIC TOGGLE ----------------
function toggleMusic() {
    const music = document.getElementById("bg-music");
    const icon = document.getElementById("music-icon");
    if(!music) return;

    if(music.paused) {
        music.play();
        if(icon) icon.style.filter = "drop-shadow(0 0 10px gold)";
    } else {
        music.pause();
        if(icon) icon.style.filter = "none";
    }
}

// ---------------- SMOOTH SCROLL (Optional) ----------------
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
