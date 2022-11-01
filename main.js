const buttons = document.querySelectorAll(".icon");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.button === " next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const emailInput = document.querySelector("[data-email-input]");
const submitButton = document.querySelector("[data-submit-email-button]");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value === "") {
    alert("You can not submit an empty email!");
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
