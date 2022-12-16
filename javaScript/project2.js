let mainList = document.querySelectorAll(".navbar .nav-link");
let removeActive = () => {
  mainList.forEach((element) => {
    if (element.className.includes("active")) {
      element.classList.remove("active");
    }
  });
};
let addActive = () => {
  if (location.href.includes("index")) {
    removeActive();
    mainList[0].classList.add("active");
  } else if (location.href.includes("about")) {
    removeActive();
    mainList[1].classList.add("active");
  } else if (location.href.includes("contactUs")) {
    removeActive();
    mainList[2].classList.add("active");
  }
};
addActive();
