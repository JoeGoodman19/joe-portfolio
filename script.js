
document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

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

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlides();
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  });

  updateSlides();

});
