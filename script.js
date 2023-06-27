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

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

let count = document.getElementsByClassName("card").length;
console.log(count);

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("I viaggi presenti su questa pagina sono " + count, "info");
  });
}
