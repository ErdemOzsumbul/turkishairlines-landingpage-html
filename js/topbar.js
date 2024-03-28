const topbarScipt = () => {
  const menu = document.getElementById("menu");
  let active = false;
  menu.addEventListener("click", () => {
    active = !active;
    const nav = document.getElementById("nav");
    active ? nav.classList.add("active") : nav.classList.remove("active");
  });
};

topbarScipt();
