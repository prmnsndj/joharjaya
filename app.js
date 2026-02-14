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
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
