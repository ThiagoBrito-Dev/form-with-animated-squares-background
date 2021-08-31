const body = document.querySelector("body");
const form = document.querySelector("form");
const submitButton = form.querySelector("button");
const unorderedSquaresList = document.querySelector("ul");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const formFields = [...form.querySelectorAll("input")];
  formFields.forEach((field) => {
    if (!field.value && !form.classList.contains("negative-shake")) {
      form.classList.add("negative-shake");
    }
  });

  if (form.classList.contains("negative-shake")) {
    form.addEventListener("animationend", (event) => {
      if (event.animationName === "negative-shake") {
        form.classList.remove("negative-shake");
      }
    });
  } else {
    form.classList.add("swipe-down");
  }
});

form.addEventListener("animationstart", (event) => {
  if (event.animationName == "swipe-down") {
    body.style.overflow = "hidden";
  }
});

form.addEventListener("animationend", (event) => {
  if (event.animationName == "swipe-down") {
    body.addEventListener.overflow = "auto";
    form.style.display = "none";
  }
});

for (let index = 0; index <= 15; index++) {
  const square = document.createElement("li");

  const getRandomValues = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const size = getRandomValues(30, 100);
  const position = getRandomValues(1, 99);
  const duration = getRandomValues(5, 10);
  const delay = getRandomValues(0.85, 10);

  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.style.bottom = `-${size}px`;
  square.style.left = `${position}%`;
  square.style.animationDuration = `${duration}s`;
  square.style.animationDelay = `${delay}s`;
  square.style.animationTimingFunction = `cubic-bezier(
    ${Math.random}, ${Math.random}, ${Math.random}, ${Math.random}
  )`;

  unorderedSquaresList.appendChild(square);
}
