const daysEl = document.getElementById("dias");
const hoursEl = document.getElementById("horas");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("segundos");

const añoNuevo = "1 Jan 2023";

function temporizador() {
    const fechaAñoN = new Date(añoNuevo);
    const fechaActual = new Date();

    const totalSeconds = (fechaAñoN - fechaActual) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


// Reemplazo el html por el resultado de las variables

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


// Boton de pausar video

let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "<i class='fas fa-pause'></i>";
    } else {
      video.pause();
      btn.innerHTML = "<i class='fas fa-play'></i>";
    }
  }
// llamo a funcion
temporizador();

setInterval(temporizador, 1000);

// Botones Audio

/* const volumeUp = document.getElementById("volumeUp")
const volumeMute = document.getElementById("mute")
const myVideo = document.getElementById("myVideo") */

/* volumeControls => {
    if (volumeUp.addEventListener("click", volumeControls)) {
        
    }
} */

/* function myFunction() {
    if (myVideo.volume==1) {
      video.volume=0;
      myVideo = volumeMute;
    } else {
      video.volume=1;
      myVideo = volumeUp;
    }
  }
  myFunction() */

  
