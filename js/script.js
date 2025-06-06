
const music = document.getElementById('music');
const playButton = document.getElementById('playButton');

// Función para actualizar el icono del botón
const updateButtonIcon = () => {
  playButton.textContent = music.paused ? '▶' : '⏸';
};

playButton.addEventListener('click', () => {
  if (music.paused) {
    music.play().catch(err => {
      console.log("Error al reproducir:", err);
    });
  } else {
    music.pause();
  }
  updateButtonIcon(); // Actualiza el icono cada vez que se hace clic
});

// Actualiza el ícono cuando termina la música
music.addEventListener('ended', () => {
  playButton.textContent = '▶';
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

/* Datos Bancarios */

// Selecciona el contenedor donde se añadirán los datos
const datosContainer = document.getElementById("datos-bancarios-container");

// Crea el botón principal
const botonDatos = document.createElement("button");
botonDatos.className = "boton-datos-bancarios";
botonDatos.innerHTML = '<img src="./img/banco.png" alt="Icono banco" class="icono-banco"> Ver Datos Bancarios';

// Variable para rastrear si los datos están visibles
let datosVisibles = false;

// Evento para mostrar/ocultar los datos bancarios
botonDatos.addEventListener("click", () => {
    if (!datosVisibles) {
        // Crea el contenido de los datos bancarios
        const datosBancarios = document.createElement("div");
        datosBancarios.id = "datos-bancarios";
        datosBancarios.innerHTML = `
            <p><strong>BANCO:</strong> BBVA</p>
            <p><strong>Nº DE TARJETA:</strong> 4152 3138 7174 5944</p>
            <p><strong>CUENTA CLABE:</strong> 012 180 01570477547 9</p>
            <p><strong>TITULAR:</strong> Estefany Escalona</p>
            <p><strong>CONCEPTO:</strong> Buenos Deseos</p>
            <button id="cerrar-datos" class="cerrar-datos">X</button>
        `;
        datosContainer.appendChild(datosBancarios);
        datosVisibles = true;

        // Agrega funcionalidad para cerrar con la "X"
        document.getElementById("cerrar-datos").addEventListener("click", () => {
            datosBancarios.remove();
            datosVisibles = false;
        });
    } else {
        // Si ya están visibles, los ocultamos
        document.getElementById("datos-bancarios").remove();
        datosVisibles = false;
    }
});

// Agrega el botón principal al contenedor
datosContainer.appendChild(botonDatos);


/* confirmar asistencia */

// Botón confirmar con Estefany
document.getElementById("confirmar-estefany").addEventListener("click", () => {
    const mensaje = encodeURIComponent("¡Hola, Estefany! Confirmo mi asistencia a la boda. Muchas gracias por la invitación.");
    window.open(`https://wa.me/525580363354?text=${mensaje}`, "_blank");
});

// Botón confirmar con Miguel
document.getElementById("confirmar-miguel").addEventListener("click", () => {
    const mensaje = encodeURIComponent("¡Hola, Miguel! Confirmo mi asistencia a la boda. Muchas gracias por la invitación.");
    window.open(`https://wa.me/525627866348?text=${mensaje}`, "_blank");
});


/* carrusel fotos novios */


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
let autoPlayInterval;

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    resetAutoPlay(); // Reinicia la reproducción automática cuando el usuario interactúa
}

function autoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1); // Avanza automáticamente cada 3 segundos
    }, 3000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval); // Detiene el autoplay cuando el usuario usa los botones
    autoPlay(); // Reinicia el autoplay
}

document.addEventListener("DOMContentLoaded", () => {
    slides[currentSlide].classList.add('active'); // Activa la primera imagen
    autoPlay(); // Inicia la reproducción automática
});
  
