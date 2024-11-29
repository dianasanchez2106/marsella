document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const closeBtn = modal.querySelector(".video-modal-close");

  // Crear elemento de video dinámicamente
  const video = document.createElement("video");
  video.id = "modalVideo";
  video.controls = true;
  video.muted = true; // Silenciar por defecto

  // Agregar fuente de video (reemplaza con tu URL de video)
  const source = document.createElement("source");
  source.src = "./public/media/video/modal_blog.mp4"; // Cambia esto con la URL real de tu video
  source.type = "video/mp4";

  video.appendChild(source);

  // Insertar video en el contenedor
  const videoContainer = modal.querySelector(".video-container");
  videoContainer.innerHTML = ""; // Limpiar cualquier contenido existente
  videoContainer.appendChild(video);

  // Mostrar modal
  modal.style.display = "flex";
  disableBodyScroll();
  // Intentar reproducir con manejo de errores
  const playVideo = async () => {
    try {
      await video.play();
    } catch (err) {
      console.log("Video playback was prevented", err);
      // Puedes agregar lógica adicional aquí si lo deseas
    }
  };

  // Reproducir video con un pequeño retraso
  setTimeout(playVideo, 100);

  // Función para cerrar modal
  const closeModal = () => {
    modal.style.display = "none";
    video.pause();
    enableBodyScroll();
  };
  function disableBodyScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableBodyScroll() {
    document.body.style.overflow = "";
  }
  closeBtn.addEventListener("click", closeModal);

  // Cerrar modal si se hace clic fuera del contenido
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
