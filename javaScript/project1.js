let buttonPhones = document.getElementById("phones");
let buttonMakeup = document.getElementById("makeup");
let buttonClothes = document.getElementById("clothes");
let buttonCars = document.getElementById("cars");
let phones = document.querySelector(".products .phones");
let makeup = document.querySelector(".products .makeup");
let clothes = document.querySelector(".products .clothes");
let cars = document.querySelector(".products .cars");
let adds = document.querySelectorAll(".products .row a");
let imageSlider = document.querySelector(".sliderAndSection .slider .imgs img");
let carouselControlPrev = document.querySelector(".carousel-control-prev");
let carouselControlNext = document.querySelector(".carousel-control-next");
let mainList = document.querySelectorAll(".navbar .nav-link");
let counter = document.getElementById("counter");
let deleteProducts = document.querySelector(".slider .btn-danger");
let newProduct;
let arraySlidersSource = [
  "imgs/main1.png",
  "imgs/main2.png",
  "imgs/main3.png",
  "imgs/main4.png",
  "imgs/main5.png",
];

imageSlider.src = arraySlidersSource[0];

let intervalSlider = setInterval(() => {
  for (let index = 0; index < arraySlidersSource.length; index++) {
    if (
      imageSlider.src.includes(
        arraySlidersSource[arraySlidersSource.length - 1]
      )
    ) {
      imageSlider.src = arraySlidersSource[0];
      return;
    }
    if (imageSlider.src.includes(arraySlidersSource[index])) {
      imageSlider.src = arraySlidersSource[index + 1];
      return;
    }
  }
}, 3000);

let check = 1;
while (check === 1) {
  for (let index = 0; index < localStorage.length; index++) {
    if (localStorage.key(index) === "counter") {
      counter.innerHTML = localStorage.counter;
      check = 0;
    }
  }
  if (check === 1) {
    localStorage.counter = 0;
    check = 0;
  }
}
check = 1;
while (check === 1) {
  for (let index = 0; index < localStorage.length; index++) {
    if (localStorage.key(index) === "arrSrc") {
      if (
        localStorage.arrSrc.split(",").length > 0 &&
        localStorage.arrSrc !== ""
      ) {
        arraySlidersSource = localStorage.arrSrc.split(",");
        imageSlider.src = arraySlidersSource[0];
      }
      check = 0;
    }
  }
  if (check === 1) {
    localStorage.arrSrc = [];
    check = 0;
  }
}

deleteProducts.addEventListener("click", () => {
  localStorage.counter = 0;
  localStorage.arrSrc = [];
  counter.innerHTML = window.localStorage.counter;
  location.reload();
});

buttonPhones.addEventListener("click", () => {
  phones.style.display = "flex";
  makeup.style.display = "none";
  clothes.style.display = "none";
  cars.style.display = "none";
});
buttonMakeup.addEventListener("click", () => {
  phones.style.display = "none";
  makeup.style.display = "flex";
  clothes.style.display = "none";
  cars.style.display = "none";
});
buttonClothes.addEventListener("click", () => {
  phones.style.display = "none";
  makeup.style.display = "none";
  clothes.style.display = "flex";
  cars.style.display = "none";
});
buttonCars.addEventListener("click", () => {
  phones.style.display = "none";
  makeup.style.display = "none";
  clothes.style.display = "none";
  cars.style.display = "flex";
});

for (let index = 0; index < adds.length; index++) {
  adds[index].addEventListener("click", () => {
    if (localStorage.arrSrc === "") {
      arraySlidersSource = [];
    }
    newProduct =
      adds[index].parentElement.previousElementSibling.firstElementChild.src;
    arraySlidersSource.push(newProduct);
    imageSlider.src = arraySlidersSource[0];
    localStorage.counter = arraySlidersSource.length;
    counter.innerHTML = localStorage.counter;
    localStorage.arrSrc = arraySlidersSource;
  });
}

carouselControlNext.addEventListener("click", () => {
  for (let index = 0; index < arraySlidersSource.length; index++) {
    if (
      imageSlider.src.includes(
        arraySlidersSource[arraySlidersSource.length - 1]
      )
    ) {
      imageSlider.src = arraySlidersSource[0];
      return;
    }
    if (imageSlider.src.includes(arraySlidersSource[index])) {
      imageSlider.src = arraySlidersSource[index + 1];
      return;
    }
  }
});

carouselControlPrev.addEventListener("click", () => {
  for (let index = arraySlidersSource.length - 1; index >= 0; index--) {
    if (imageSlider.src.includes(arraySlidersSource[0])) {
      imageSlider.src = arraySlidersSource[arraySlidersSource.length - 1];
      return;
    }
    if (imageSlider.src.includes(arraySlidersSource[index])) {
      imageSlider.src = arraySlidersSource[index - 1];
      return;
    }
  }
});
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
