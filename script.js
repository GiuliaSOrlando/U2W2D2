const collapserSales = document.getElementById("collapser-1");
const salesSection = document.getElementById("section-to-hide-1");
const collapserSummer = document.getElementById("collapser-2");
const summerSection = document.getElementById("section-to-hide-2");

const hide = function (el) {
  el.classList.toggle("d-none");
};

collapserSales.addEventListener("click", function () {
  hide(salesSection);
});

collapserSummer.addEventListener("click", function () {
  hide(summerSection);
});

const currentYear = document.getElementById("current-year");
currentYear.innerText = new Date().getFullYear();
