const cmetr = 1;
const metr = 100;
const inch = 2.54;
const foot = 30.48;

const length = {
  cmetr: 1,
  metr: 100,
  inch: 2.54,
  foot: 30.48,
};

const cmetrInput = document.querySelector(".cmetr");
cmetrInput.addEventListener("input", cmetrInputChange);

const metrInput = document.querySelector(".metr");
metrInput.addEventListener("input", metrInputChange);

const inchInput = document.querySelector(".inch");
inchInput.addEventListener("input", inchInputChange);

const footInput = document.querySelector(".foot");
footInput.addEventListener("input", footInputChange);

const metresOutputCm = document.querySelector(".metres-output-cm");
const metresOutputFoot = document.querySelector(".metres-output-foot");
const metresOutputInch = document.querySelector(".metres-output-inch");

const cmetresOutputM = document.querySelector(".cmetres-output-m");
const cmetresOutputFoot = document.querySelector(".cmetres-output-foot");
const cmetresOutputInch = document.querySelector(".cmetres-output-inch");

const footOutputM = document.querySelector(".foot-output-m");
const footOutputCm = document.querySelector(".foot-output-cm");
const footOutputInch = document.querySelector(".foot-output-inch");

const inchOutputM = document.querySelector(".inch-output-m");
const inchOutputCm = document.querySelector(".inch-output-cm");
const inchOutputFoot = document.querySelector(".inch-output-foot");

function metrInputChange(event) {
  const { value } = event.currentTarget;
  metresOutputCm.textContent = value * metr;
  metresOutputFoot.textContent = (value * 3.28).toFixed(1);
  metresOutputInch.textContent = (value * 39.37).toFixed(1);
}

function cmetrInputChange(event) {
  const { value } = event.currentTarget;
  cmetresOutputM.textContent = (value / metr).toFixed(2);
  cmetresOutputFoot.textContent = (value / foot).toFixed(1);
  cmetresOutputInch.textContent = (value / inch).toFixed(1);
}

function footInputChange(event) {
  const { value } = event.currentTarget;
  footOutputM.textContent = (value / 3.28).toFixed(1);
  footOutputCm.textContent = (value * foot).toFixed(1);
  footOutputInch.textContent = (value * 12).toFixed(1);
}

function inchInputChange(event) {
  const { value } = event.currentTarget;
  inchOutputM.textContent = (value / 39.37).toFixed(2);
  inchOutputCm.textContent = (value * inch).toFixed(1);
  inchOutputFoot.textContent = (value / 12).toFixed(1);
}
console.log(length.metr);
