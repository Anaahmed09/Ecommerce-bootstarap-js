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
let button = document.querySelector("form button");
let fullName = document.getElementById("fullName");
let Email1 = document.getElementById("Email1");
let Password1 = document.getElementById("Password1");
let massage = document.getElementById("massage");
fullName.addEventListener("keypress", () => {
  fullName.nextElementSibling.innerHTML = "";
});
Email1.addEventListener("keypress", () => {
  Email1.nextElementSibling.innerHTML = "";
});
Password1.addEventListener("keypress", () => {
  Password1.nextElementSibling.innerHTML = "";
});
massage.addEventListener("keypress", () => {
  massage.nextElementSibling.innerHTML = "";
});
button.addEventListener("click", (e) => {
  if (!/(^[A-Za-z]+)\s([A-Za-z]+)$/.test(fullName.value)) {
    fullName.nextElementSibling.innerHTML =
      "Error: Your Name Don't Match Formatting (Example Example)";
    e.preventDefault();
  }
  if (!/^(\w+)@([A-Za-z]{3,})[.]([A-Za-z]{3,})$/.test(Email1.value)) {
    Email1.nextElementSibling.innerHTML =
      "Error: Your Email Don't Match Formatting (example@example.com)";
    e.preventDefault();
  }
  if (!/\w{8,}/.test(Password1.value)) {
    Password1.nextElementSibling.innerHTML =
      "Error: Your Password Don't Match Formatting (********...)";
    e.preventDefault();
  }
  if (!/^(\w+\s\w+)/.test(massage.value)) {
    massage.nextElementSibling.innerHTML =
      "Error: Your Massage Don't Match Formatting (massage massage)";
    e.preventDefault();
  }
});
