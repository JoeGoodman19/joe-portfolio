document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const carousel = document.querySelector(".stack-carousel");

  let current = 0;

  function updateSlides() {
    slides.forEach(slide => {
      slide.classList.remove("active", "prev", "next");
    });

    slides[current].classList.add("active");

    let prevIndex = (current - 1 + slides.length) % slides.length;
    let nextIndex = (current + 1) % slides.length;

    slides[prevIndex].classList.add("prev");
    slides[nextIndex].classList.add("next");
  }

  // Botones (Desktop)
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlides();
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  });

  // ======================
  // SWIPE PARA CELULAR
  // ======================

  let startX = 0;
  let endX = 0;

  carousel.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", function(e) {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", function() {
    let diff = startX - endX;

    if (diff > 50) {
      // Swipe izquierda → siguiente
      current = (current + 1) % slides.length;
      updateSlides();
    } 
    else if (diff < -50) {
      // Swipe derecha → anterior
      current = (current - 1 + slides.length) % slides.length;
      updateSlides();
    }
  });

  updateSlides();

});
