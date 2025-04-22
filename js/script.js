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

    document.getElementById("contador").innerHTML = `
        <div class="tiempo"><span>${dias}</span><span class="label">Días</span></div>
        <span class="separador">:</span>
        <div class="tiempo"><span>${horas}</span><span class="label">Horas</span></div>
        <span class="separador">:</span>
        <div class="tiempo"><span>${minutos}</span><span class="label">Minutos</span></div>
        <span class="separador">:</span>
        <div class="tiempo"><span>${segundos}</span><span class="label">Segundos</span></div>
    `;

    setTimeout(actualizarContador, 1000);
}

actualizarContador();

