
// CAROUSEL
// Set the width dynamically

const sliderTrack = document.querySelector(".slider__track");
const slides = Array.from(document.querySelectorAll(".slider__item"));
const progressBarLines = Array.from(
  document.querySelectorAll(".progressbar__line"),
);
const prevBtn = document.querySelector(".slider__btn--left");
const nextBtn = document.querySelector(".slider__btn--right");
let currentIndex = 0;
let intervalId; // interval timer
const intervalDuration = 5000; // duration of auto-slide in ms

// Set the width of the slider track dynamically based on number of slides
const slideWidth = slides[0].offsetWidth; // Get the width of the first slide
sliderTrack.style.width = `${slideWidth * slides.length}px`; // Set the width dynamically

// Update the progress bar
function updateProgressBar() {
  progressBarLines.forEach((line, index) => {
    line.classList.toggle("progressbar__line--active", index === currentIndex);
  });
}

// Move to a specific slide
function moveToSlide(index) {
  // Ensure the transform property is applied correctly
  sliderTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
  updateProgressBar();
}

// Go to the next slide
function nextSlide() {
  moveToSlide((currentIndex + 1) % slides.length); // Loop back to the first slide
}

// Go to the previous slide
function prevSlide() {
  moveToSlide((currentIndex - 1 + slides.length) % slides.length); // Loop back to the last slide
}

// Stop auto slide when mouse enters the slider
function stopAutoSlide() {
  clearInterval(intervalId);
}

// Start auto slide
function startAutoSlide() {
  intervalId = setInterval(nextSlide, intervalDuration);
}

// Event listeners to stop and start the auto slide
sliderTrack.addEventListener("mouseenter", stopAutoSlide);
sliderTrack.addEventListener("mouseleave", startAutoSlide);

// Event listeners for navigation buttons
prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

// Touch event listeners for swiping
let touchStartX = 0;
let touchEndX = 0;

sliderTrack.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
  stopAutoSlide(); // Stop auto slide on touch start
});

sliderTrack.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX) {
    nextSlide(); // Next slide on swipe left
  } else if (touchEndX > touchStartX) {
    prevSlide(); // Previous slide on swipe right
  }
  startAutoSlide(); // Restart auto slide after touch end
});

// Start auto slide on page load
startAutoSlide();
updateProgressBar();

//MODAL WINDOWS

const modals = document.querySelectorAll(".modal");
const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    modals[index].classList.remove("modal--hidden");
    document.body.style.overflow = "hidden";
    menu.classList.add("grayscale");
    document.querySelector(".header").classList.add("grayscale");
  });
});

modals.forEach((modal) => {
  const modalCloseBtn = modal.querySelector(".modal__btn");
  modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("modal--hidden");
    menu.classList.remove("grayscale");
    document.querySelector(".header").classList.remove("grayscale");
    document.body.style.overflow = "visible";
  });
});
