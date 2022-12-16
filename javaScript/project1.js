let buttonPhones = document.getElementById("phones");
let buttonMakeup = document.getElementById("makeup");
let buttonClothes = document.getElementById("clothes");
let buttonCars = document.getElementById("cars");
let phones = document.querySelector(".products .phones");
let makeup = document.querySelector(".products .makeup");
let clothes = document.querySelector(".products .clothes");
let cars = document.querySelector(".products .cars");

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

let adds = document.querySelectorAll(".products .row a");
let imageSlider = document.querySelector(".sliderAndSection .slider .imgs img");
let carouselControlPrev = document.querySelector(".carousel-control-prev");
let carouselControlNext = document.querySelector(".carousel-control-next");
let newProduct;
let arraySlidersSource = [];
let mainList = document.querySelectorAll(".navbar .nav-link");
let counter = document.getElementById("counter");
for (let index = 0; index < adds.length; index++) {
  adds[index].addEventListener("click", (e) => {
    newProduct = e.path[2].firstElementChild.firstElementChild.src;
    arraySlidersSource.push(newProduct);
    imageSlider.src = arraySlidersSource[0];
    counter.innerHTML = arraySlidersSource.length;
  });
}
carouselControlNext.addEventListener("click", () => {
  for (let index = 0; index < arraySlidersSource.length; index++) {
    if (imageSlider.src === arraySlidersSource[arraySlidersSource.length - 1]) {
      imageSlider.src = arraySlidersSource[0];
      return;
    }
    if (imageSlider.src === arraySlidersSource[index]) {
      imageSlider.src = arraySlidersSource[index + 1];
      return;
    }
  }
});
carouselControlPrev.addEventListener("click", () => {
  for (let index = arraySlidersSource.length - 1; index >= 0; index--) {
    if (imageSlider.src === arraySlidersSource[0]) {
      imageSlider.src = arraySlidersSource[arraySlidersSource.length - 1];
      return;
    }
    if (imageSlider.src === arraySlidersSource[index]) {
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
