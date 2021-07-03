const otherRerntersOpener = document.querySelectorAll(".otherRerntersOpener");
const text = document.querySelector(".text");
const card = document.querySelector(".card");
const bars = document.querySelector(".bars");
const closeBtn = document.querySelector(".close");
const openerTxt = document.querySelector(".openerTxt");
const cardImg = document.querySelector(".cardImg");
const otherRentersList = document.querySelector(".otherRentersList");

var opened = false;

card.style.height = `${card.offsetHeight - otherRentersList.offsetHeight}`;
const logsFunc = () => {
  // card.style.height = `${card.offsetHeight - otherRentersList.offsetHeight}px`;
};

window.addEventListener("resize", logsFunc);
otherRerntersOpener.forEach((one) =>
  one.addEventListener("click", () => {
    if (opened) {
      text.style.marginTop = "0";
      closeBtn.style.display = "none";
      bars.style.display = "block";
      openerTxt.style.display = "inline-block";
      opened = !opened;
    } else {
      text.style.marginTop = `-${cardImg.offsetHeight - 50}px`;
      closeBtn.style.display = "block";
      bars.style.display = "none";
      openerTxt.style.display = "none";
      opened = !opened;
    }
  })
);
