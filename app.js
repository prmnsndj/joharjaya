const navbarNav = document.querySelector(".navbar-nav");
const slidesContainer = document.querySelector(".slide-container");
const imageSlides = document.querySelectorAll(".slide-container img");
const dots = document.querySelectorAll(".dot");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let start;
let end;
let slideIndex = 0;
let windowWidth = window.innerWidth;
let slideWidth = 1565;
let screenWidth = window.screen.width;

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var counter = 1;

  setInterval(function () {
    const radio = document.getElementById("radio" + counter);
    if (radio) {
      radio.checked = true;
    }

    counter++;
    if (counter > 5) {
      counter = 1;
    }
  }, 12000);
});

document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 650) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

document.addEventListener(
  "contextmenu",
  function (event) {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  },
  false,
);

const observerOptions = {
  threshold: 0.4, // Elemen akan muncul jika 15% bagian sudah terlihat
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Pake Panah
function previousSlide() {
  slideIndex <= 0 ? (slideIndex = imageSlides.length - 1) : slideIndex--;

  updateSlider();
}

function nextSlide() {
  slideIndex >= imageSlides.length - 1 ? (slideIndex = 0) : slideIndex++;

  updateSlider();
}

arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

// Pake panah keyboard
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    previousSlide();
  }
});
// Pake Dots
function goToSlide(index) {
  slideIndex = index;
  updateSlider();
}

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => goToSlide(index)),
);
// Swipe
slidesContainer.addEventListener("touchstart", (e) => {
  start = e.touches[0].clientX;
});

slidesContainer.addEventListener("touchend", (e) => {
  end = e.changedTouches[0].clientX;
  const diff = end - start;
  if (diff > 50) {
    previousSlide();
  } else if (diff < -50) {
    nextSlide();
  }
});
//
