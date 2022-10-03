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
const footInput = document.querySelector(".foot");

const metresOutputCm = document.querySelector(".metres-output-cm");
const metresOutputFoot = document.querySelector(".metres-output-foot");
const metresOutputInch = document.querySelector(".metres-output-inch");

const cmetresOutputM = document.querySelector(".cmetres-output-m");
const cmetresOutputFoot = document.querySelector(".cmetres-output-foot");
const cmetresOutputInch = document.querySelector(".cmetres-output-inch");

function metrInputChange(event) {
  const { value } = event.currentTarget;
  metresOutputCm.textContent = value * metr;
  metresOutputFoot.textContent = value * 3.28;
  metresOutputInch.textContent = value * 39.37;
}

function cmetrInputChange(event) {
  const { value } = event.currentTarget;
  cmetresOutputM.textContent = value / 100;
  cmetresOutputFoot.textContent = value / foot;
  cmetresOutputInch.textContent = value / inch;
}


console.log(length.metr);
