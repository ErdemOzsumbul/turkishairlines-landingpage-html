const search = () => {
  const steps = document.querySelectorAll(".search-step");
  let currencyStep = 0;
  steps.forEach((step, idx) => {
    if (currencyStep == idx) step.classList.add("active");
    step.addEventListener("click", () => {
      steps.forEach(step => {
        step.classList.remove("active");
      });
      step.classList.add("active");
    });
  });
};

search();
