import { getConversionRates, filterTopCurrencies } from "./api.js";

let moneda = await getConversionRates();
console.log(moneda);
const monedaElement = document.getElementById("moneda");
monedaElement.textContent = "Tipo de cambio";
const filtered = filterTopCurrencies(moneda);
filtered.forEach((key, index) => {
  let liElement = document.createElement("li");
  liElement.classList.add("dropdown-item", "clearfix");
  liElement.innerHTML = `<span class="float-start">${key}</span><span class="float-end">${moneda[key]}</span>`;
  document
    .querySelector(".dropdown-menu")
    .insertBefore(
      liElement,
      document.querySelector(".dropdown-menu").children[1]
    );
});
var myCarousel = document.getElementById("carouselExampleSlidesOnly");
myCarousel.addEventListener("slide.bs.carousel", (event) => {
  const children = Array.from(
    document.getElementsByClassName("navbar-nav")[0].children
  );
  children.forEach((child, position) => {
    if (position === event.to) {
      child.children[0].classList.add("active");
    } else {
      child.children[0].classList.remove("active");
    }
  });
});
