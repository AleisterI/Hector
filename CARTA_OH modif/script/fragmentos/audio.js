// Obtiene el botón y el elemento de audio
const botonReproducir = document.getElementById('reproducir-audio');
const miAudio = document.getElementById('mi-audio');

// Escucha el evento de clic del botón
botonReproducir.addEventListener('click', function() {
  if (miAudio.paused) {
    miAudio.play(); // Reproduce el audio si está en pausa
  } else {
    miAudio.pause(); // Pausa el audio si está reproduciéndose
  }
});
