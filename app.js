const navbarNav = document.querySelector(".navbar-nav");

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
    (nav.classList.remove("scrolled"),
      dropdowncontent.classList.remove("scrolled"));
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
    // Jika ingin animasi berulang setiap di-scroll ke atas lagi,
    // aktifkan baris di bawah ini:
    // else { entry.target.classList.remove('show'); }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

document.querySelector(".open-all").addEventListener("click", function (e) {
  e.preventDefault();

  const details = document.querySelectorAll(".faq-item");
  const isOpening = this.textContent === "Open all";
  const delayStep = 150;

  details.forEach((detail, index) => {
    // Gunakan setTimeout untuk membuat efek berurutan
    setTimeout(() => {
      if (isOpening) {
        detail.setAttribute("open", "");
      } else {
        detail.removeAttribute("open");
      }
    }, index * delayStep); // Item ke-1 (0ms), ke-2 (150ms), ke-3 (300ms), dst.
  });

  // Ubah teks tombol
  this.textContent = isOpening ? "Close all" : "Open all";
});
