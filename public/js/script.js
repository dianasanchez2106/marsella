// Places data
const places = [
  {
    id: 1,
    title: "Casa de la Cultura ",
    description_large: `La Casa de la cultura de Marsella es una amplia casona, ubicada en una esquina de la plaza central, resalta inmediatamente se arriba al parque principal.La edificación cuenta con tres pisos y una fachada perfectamente conservadas, muestra impecables paredes blancas, puertas y ventanas azules, usada inicialmente como colegio, posteriormente se transformó en la casa de la cultura y tiene un lindo patio interior en el que hay un ajedrez gigante, rodeado de amplios corredores en los que están exhibidas varias colecciones de los museos de historia, precolombino, del periodismo Fabio Giraldo Vélez y el museo de puertas y ventanas.`,
    description:
      "La Casa de la Cultura de Marsella, una antigua casona de tres pisos, adorna la plaza central con su elegante fachada blanca y azul. Convertida de colegio a centro cultural, alberga un patio interior con ajedrez gigante y exposiciones de historia, arqueología y periodismo.",
    urls: [
      {
        type: "facebook",
        url: "https://www.facebook.com/CasaDeLaCulturaDeMarsella/",
      },
      {
        type: "map",
        url: "https://maps.app.goo.gl/8qeZkWxwb8cyxVB6A",
      },
    ],
    filepaths: [
      "./public/media/uploads\\WhatsApp_Image_2024-11-25_at_1.06.57_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-25_at_1.16.15_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-25_at_1.16.12_PM_1.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-25_at_1.07.05_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-25_at_1.06.59_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-25_at_1.07.02_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_2.19.53_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Video_2024-11-25_at_12.56.35_PM.mp4",
    ],
  },
  {
    id: 2,
    title: "Parque Bolivar",
    description:
      "Parque principal de bolívar donde se ubica la iglesia, el palacio municipal y la casa de la cultura.",
    urls: [
      //map
      {
        type: "map",
        url: "https://maps.app.goo.gl/mxFbAWwkArr9QeEQA",
      },
    ],
    filepaths: [
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_2.28.20_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_2.27.43_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_2.27.10_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_2.26.22_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Video_2024-11-26_at_2.25.15_PM.mp4",
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_2.37.20_PM.jpeg",
    ],
  },
  {
    id: 3,
    title: "Iglesia Parroquia la Inmaculada",
    urls: [
      //map
      {
        type: "map",
        url: "https://maps.app.goo.gl/ZmvaSNCcxQNJyUcm9",
      },
    ],
    description:
      "Iglesia ubicada en el parque principal que es patrimonio arquitectónico de la Nación.",
    description_large:
      "La Iglesia María Inmaculada, ubicada en Marsella, Santander, es un ícono religioso y arquitectónico de la región. Construida a principios del siglo XX, esta imponente iglesia ha sido un centro de fe para los habitantes de Marsella y un atractivo turístico para visitantes nacionales e internacionales. Su belleza arquitectónica y su rica historia la convierten en un lugar de peregrinación y un símbolo del patrimonio cultural de la región.",
    filepaths: [
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_2.48.07_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Video_2024-11-26_at_2.51.41_PM.mp4",
    ],
  },
  {
    id: 4,
    title: "Cementerio ",
    urls: [
      //map
      {
        type: "map",
        url: "https://maps.app.goo.gl/p69jCjPPkDNtBcVp6",
      },
    ],
    description:
      "Cementerio municipal con construcción en forma de gradas, jardines, monumentos religiosos y vista a la ciudad, está ubicado en medio de las casa y cuenta tanto con tumbas en el suelo como con osarios en las paredes",
    filepaths: [
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_3.03.25_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_3.03.55_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_3.05.24_PM.jpeg",
      "./public/media/uploads\\WhatsApp_Video_2024-11-26_at_3.02.52_PM.mp4",
    ],
  },
  {
    id: 5,
    title: "Jardín Botánico",
    description:
      'El Jardín Botánico se encuentra atravesado por la quebrada "El Jardín". sobre este sector, encontramos una represa construida en piedra donde hay varias especies de peces. Siguiendo el sendero encontramos flores y follajes como Heliconias, Maracas y Hortensiasg',
    urls: [
      //map
      {
        type: "map",
        url: "https://maps.app.goo.gl/3B98cBiMon5hFSHg8",
      },
    ],
    filepaths: [
      "./public/media/uploads\\WhatsApp_Image_2024-11-26_at_3.15.36_PM.jpeg",
      {
        path: "./public/media/uploads\\WhatsApp_Video_2024-11-26_at_3.30.12_PM.mp4",
        description: "Video de la representa en el jardín botánico",
      },
    ],
  },
];

// Carousel functionality
class Carousel {
  constructor(element) {
    this.track = element.querySelector(".carousel-track");
    this.prevButton = element.querySelector(".prev");
    this.nextButton = element.querySelector(".next");

    this.currentIndex = 0;
    this.cardWidth = 0;
    this.totalSlides = places.length;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 3000; // 3 seconds

    this.initializeCarousel();
    this.setupEventListeners();
    this.updateCardWidth();
    this.startAutoPlay();

    // Update card width on window resize
    window.addEventListener("resize", () => {
      this.updateCardWidth();
      this.goToSlide(this.currentIndex);
    });
  }

  initializeCarousel() {
    // Create and append place cards
    places.forEach((place) => {
      const card = document.createElement("article");
      card.className = "place-card";
      const imageCarousel = this.createImageCarousel(place.filepaths);

      card.innerHTML = `
                ${imageCarousel}
                <div class="place-content">
                    <h3>${place.title}</h3>
                    <p>${place.description}</p>
                </div>
            `;

      this.track.appendChild(card);
    });
  }

  createImageCarousel(images) {
    if (images.length === 0) return "";

    return `
            <div class="image-carousel">
                <img src="${images[0]}" alt="" loading="lazy">
            </div>
        `;
  }

  setupEventListeners() {
    this.prevButton.addEventListener("click", () => {
      this.prev();
      this.stopAutoPlay();
    });
    this.nextButton.addEventListener("click", () => {
      this.next();
      this.stopAutoPlay();
    });

    // Pause autoplay on hover
    this.track.addEventListener("mouseenter", () => this.stopAutoPlay());
    this.track.addEventListener("mouseleave", () => this.startAutoPlay());

    // Pause autoplay when the page is not visible
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.stopAutoPlay();
      } else {
        this.startAutoPlay();
      }
    });
  }

  updateCardWidth() {
    const card = this.track.querySelector(".place-card");
    if (card) {
      this.cardWidth = card.offsetWidth + 20; // Including gap
    }
  }

  goToSlide(index) {
    this.currentIndex = index;
    const offset = -this.currentIndex * this.cardWidth;
    this.track.style.transform = `translateX(${offset}px)`;
  }

  next() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentIndex + 1);
    } else {
      this.goToSlide(0);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    } else {
      this.goToSlide(this.totalSlides - 1);
    }
  }

  startAutoPlay() {
    if (this.autoPlayInterval) return;
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

// Initialize carousel when DOM is loaded
/* document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.querySelector(".carousel");
  if (carouselElement) {
    new Carousel(carouselElement);
  }
}); */
document.addEventListener("DOMContentLoaded", () => {
  const placeModal = document.getElementById("placeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImageCarousel = document.getElementById("modalImageCarousel");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = placeModal.querySelector(".close");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const carouselElement = document.querySelector(".carousel");
  if (carouselElement) {
    new Carousel(carouselElement);
  }

  let currentSlide = 0;
  let slides = [];

  // Ensure the modal is hidden initially
  placeModal.style.display = "none";

  function disableBodyScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableBodyScroll() {
    document.body.style.overflow = "";
  }

  // Mostrar modal al hacer clic en una tarjeta
  const placeCards = document.querySelectorAll(".place-card");
  placeCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const place = places[index];
      modalTitle.textContent = place.title;
      console.log(place.urls.filter((url) => url.type === "map")[0].url);
      modalTitle.href =
        place.urls.filter((url) => url.type === "map")[0].url ?? "";
      modalTitle.target = "_blank";
      modalDescription.textContent =
        place.description_large ?? place.description;

      // Crear un carrusel de imágenes y videos
      slides = place.filepaths
        .map((filePath) => {
          const path = typeof filePath === "object" ? filePath.path : filePath;
          const fileExtension = path.split(".").pop().toLowerCase();

          if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
            return `<img src="${path}" alt="Image of ${place.title}"loading="lazy" />`;
          } else if (["mp4", "webm", "ogg"].includes(fileExtension)) {
            return `
              <video controls>
                <source src="${path}" type="video/${fileExtension}">
                Tu navegador no soporta reproducción de video.
              </video>`;
          } else {
            return "";
          }
        })
        .filter((slide) => slide !== "");

      currentSlide = 0;
      updateCarousel();

      placeModal.style.display = "flex";
      disableBodyScroll();
    });
  });

  function updateCarousel() {
    modalImageCarousel.innerHTML = slides[currentSlide];
    prevButton.style.display = currentSlide > 0 ? "block" : "none";
    nextButton.style.display =
      currentSlide < slides.length - 1 ? "block" : "none";
  }

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateCarousel();
    }
  });

  function stopAllVideos() {
    const videos = modalImageCarousel.querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  function hideModal() {
    stopAllVideos();
    placeModal.style.display = "none";
    enableBodyScroll();
  }

  // Cerrar modal
  closeModal.addEventListener("click", hideModal);

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === placeModal) {
      hideModal();
    }
  });

  // Cerrar modal con la tecla Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && placeModal.style.display === "flex") {
      hideModal();
    }
  });
});
