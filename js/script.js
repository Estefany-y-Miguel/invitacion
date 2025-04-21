document.getElementById("playButton").addEventListener("click", function() {
    let music = document.getElementById("music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});


/* contador */

function actualizarContador() {
    const fechaBoda = new Date("2025-08-02T00:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    setTimeout(actualizarContador, 1000); // Actualiza cada segundo
}

actualizarContador();

