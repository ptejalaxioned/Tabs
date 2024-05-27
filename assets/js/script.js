let li = document.querySelectorAll("li");
let img = document.querySelector("img");
let cityName = document.querySelector(".capital ");
let countryName = document.querySelector(".country");
let h2 = document.querySelector("h2");

li.forEach((val, index) => {
  li[index].addEventListener("click", (e) => {
    let city = e.target.className;
    let sepateClass = city.split(" ");

    if (sepateClass[0] === "london") {
      img.setAttribute("src", "./assets/images/london.svg");
      cityName.innerText = "london";
      countryName.innerText = "england";
      h2.innerText = "london";
      let sss = document.querySelector(".london");
      sss.style.border = "1.5px solid rgb(170, 166, 166)";
      sss.style.borderBottom = "none";
      index = 0;

      for (let i = 0; i <= 2; i++) {
        if (i === index) {
          continue;
        }
        li[i].children[0].style.border = "none";
        li[i].children[0].style.borderBottom = "1.5px solid rgb(170, 166, 166)";
      }
    }
    if (sepateClass[0] === "paris") {
      img.setAttribute("src", "./assets/images/paris.svg");
      cityName.innerText = "paris";
      countryName.innerText = "france";
      h2.innerText = "paris";
      let sss = document.querySelector(".paris");
      sss.style.border = "1.5px solid rgb(170, 166, 166)";
      sss.style.borderBottom = "none";
      index = 1;

      for (let i = 0; i <= 2; i++) {
        if (i === index) {
          continue;
        }
        li[i].children[0].style.border = "none";
        li[i].children[0].style.borderBottom = "1.5px solid rgb(170, 166, 166)";
      }
    }
    if (sepateClass[0] === "tokiyo") {
      img.setAttribute("src", "./assets/images/tokiyo.svg");
      cityName.innerText = "tokiyo";
      countryName.innerText = "japan";
      h2.innerText = "tokiyo";
      let sss = document.querySelector(".tokiyo");
      sss.style.border = "1.5px solid rgb(170, 166, 166)";
      sss.style.borderBottom = "none";
      index = 2;
      for (let i = 0; i <= 2; i++) {
        if (i === index) {
          continue;
        }
        li[i].children[0].style.border = "none";
        li[i].children[0].style.borderBottom = "1.5px solid rgb(170, 166, 166)";
      }
    }
  });
});
