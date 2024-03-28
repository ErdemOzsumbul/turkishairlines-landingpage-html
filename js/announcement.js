const announcement = () => {
  const data = [
    {
      title: "Our new brand AJet started online ticket sales!",
      desc: `AnadoluJet, which meets the air transportation needs of
		Anatolia in an advantageous way, started ticket sales under
		the name AJet as of March 12, 2024 via its official website
		AJet.com. You can find detailed information about your
		questions about AnadoluJet and AJet flights on this page.`,
    },
    {
      title: "Dear Passengers,",
      desc: `Some additional controls may be applied to accept passengers on our flights to Venezuela, Mexico, Colombia, Panama, Cuba and Brazil. You can find detailed information on this page.`,
    },
  ];

  let step = false;
  const arrow = document.getElementsByClassName("announcement-arrow");
  const dots = document.getElementsByClassName("announcement-dot");

  dots[+step].style.background = "black";
  step = !step;
  dots[+step].style.background = "#ccc";

  arrow[0].addEventListener("click", () => {
    dots[+step].style.background = "black";
    step = !step;
    dots[+step].style.background = "#ccc";
    const announcement = document.getElementById("announcement-title");
    const description = document.getElementById("announcement-desc");
    announcement.innerHTML = data[+step].title;
    description.innerHTML = data[+step].desc;
  });

  arrow[1].addEventListener("click", () => {
    dots[+step].style.background = "black";
    step = !step;
    dots[+step].style.background = "#ccc";
    const announcement = document.getElementById("announcement-title");
    const description = document.getElementById("announcement-desc");

    announcement.innerHTML = data[+step].title;
    description.innerHTML = data[+step].desc;
  });

  dots[0].addEventListener("click", () => {
    dots[0].style.background = "black";
    step = !step;
    dots[1].style.background = "#ccc";
    const announcement = document.getElementById("announcement-title");
    const description = document.getElementById("announcement-desc");

    announcement.innerHTML = data[0].title;
    description.innerHTML = data[0].desc;
  });

  dots[1].addEventListener("click", () => {
    dots[1].style.background = "black";
    step = !step;
    dots[0].style.background = "#ccc";
    const announcement = document.getElementById("announcement-title");
    const description = document.getElementById("announcement-desc");

    announcement.innerHTML = data[1].title;
    description.innerHTML = data[1].desc;
  });
};
announcement();
