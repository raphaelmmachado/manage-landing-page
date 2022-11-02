import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  //Optional parameters
  direction: "horizontal",
  loop: false,
  //If we need pagination
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const emailInput = document.querySelector("[data-email-input]");
const submitButton = document.querySelector("[data-submit-email-button]");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value === "") {
    alert(`Please, insert a valid email! 
    Email field cannot be empty.`);
  } else if (emailInput.value.includes("@")) {
    alert(`Thanks for subscribing!`);
  } else alert("Please, Insert a valid email!");
});

const hamburguerButton = document.querySelector("[data-hamburguer]");
const closeButton = document.querySelector("[data-close]");
const sideNav = document.querySelector("[data-side-nav]");

window.onresize = () => {
  if (window.innerWidth > 768) {
    sideNav.classList.add("hide");
    closeButton.classList.add("hide");
    hamburguerButton.classList.remove("hide");
  }
};
hamburguerButton.addEventListener("click", () => {
  // rotateHamburguer();
  sideNav.classList.remove("hide");
  hamburguerButton.classList.add("hide");
  closeButton.classList.remove("hide");
});
closeButton.addEventListener("click", () => {
  hamburguerButton.classList.remove("hide");
  closeButton.classList.add("hide");
  sideNav.classList.add("hide");
});

// let rotation = 0;
// let angle = 90;
// let rotate = true;

// const rotateHamburguer = () => {
//   // rotation = (rotation + angle) % 360;
//   // hamburguerButton.style.transition = "200ms rotate ease-in-out";
//   // hamburguerButton.style.rotate = `${rotation}deg`;
//   rotate === false ? (rotate = true) : (rotate = false);
//   if (!rotate) {
//     hamburguerButton.classList.add("rotate-90");
//     hamburguerButton.classList.remove("rotate-0");
//   } else {
//     hamburguerButton.classList.add("rotate-0");
//     hamburguerButton.classList.remove("rotate-90");
//   }
// };
