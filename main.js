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
    alert("Email is empty!");
  } else if (emailInput.value.includes("@")) {
    alert(`Thanks for subscribing!`);
  } else return;
});
