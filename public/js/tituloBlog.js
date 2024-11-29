document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.getElementById("title");
  const videoElement = document.getElementById("myVideo");
  const descriptionElement = document.getElementById("description");

  // Responsive behavior
  function handleResize() {
    const titleSection = document.getElementById("title-section");
    if (window.innerWidth < 768) {
      titleSection.style.padding = "2rem 1rem";
    } else {
      titleSection.style.padding = "3rem 2rem";
    }
  }

  // Initial call and event listener for resize
  handleResize();
  window.addEventListener("resize", handleResize);
});
