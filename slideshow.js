let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");

  // safety: if no slides found, stop
  if (slides.length === 0) return;

  // hide all slides
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // show the current slide
  slides[slideIndex - 1].style.display = "block";

  // update dots ONLY if they exist
  if (dots.length > 0) {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add("active");
    }
  }

  // loop every 3 seconds ( smoother timing )
  setTimeout(showSlides, 3000);
}

// start slideshow once page loads
document.addEventListener("DOMContentLoaded", showSlides);
