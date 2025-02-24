// CAROUSEL
// Set the width dynamically

const sliderTrack = document.querySelector(".slider__track");
const slides = Array.from(document.querySelectorAll(".slider__item"));
const progressBarLines = Array.from(document.querySelectorAll(".progressbar__line"));
const prevBtn = document.querySelector(".slider__btn--left");
const nextBtn = document.querySelector(".slider__btn--right");
let currentIndex = 0;
let intervalId; // interval timer
let slideWidth; // store the width dynamically
const intervalDuration = 5000; // duration of auto-slide in ms

// Update the slider track width dynamically based on the number of slides
function updateSliderTrackWidth() {
  slideWidth = slides[0].offsetWidth; // Get the width of the first slide
  sliderTrack.style.width = `${slideWidth * slides.length}px`; // Set the width dynamically
}

// Update the progress bar
function updateProgressBar() {
  progressBarLines.forEach((line, index) => {
    line.classList.toggle("progressbar__line--active", index === currentIndex);
  });
}

// Move to a specific slide
function moveToSlide(index) {
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

// Handle window resize events
window.addEventListener("resize", () => {
  updateSliderTrackWidth(); // Recalculate the slider width
  updateProgressBar(); // Update progress bar after resizing
});

// Initialize slider width on page load
updateSliderTrackWidth();

// Touch event listeners for swiping
let touchStartX = 0;
let touchEndX = 0;
let isSwiping = false;

sliderTrack.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
  stopAutoSlide(); // Stop auto slide on touch start
  isSwiping = true; // Enable swiping mode
});

sliderTrack.addEventListener("touchend", (e) => {
  if (!isSwiping) return; // If it's not a swipe action, do nothing
  touchEndX = e.changedTouches[0].screenX;

  if (touchEndX < touchStartX) {
    nextSlide(); // Next slide on swipe left
  } else if (touchEndX > touchStartX) {
    prevSlide(); // Previous slide on swipe right
  }

  startAutoSlide(); // Restart auto slide after touch end
  isSwiping = false; // Disable swiping mode
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
