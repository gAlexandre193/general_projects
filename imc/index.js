let inputWeight = document.querySelector("#inputWeight");
let inputHeight = document.querySelector("#inputHeight");
let buttonCalcIMC = document.querySelector("#buttonCalcIMC");
let resultIMC = document.querySelector("#resultIMC");

buttonCalcIMC.addEventListener("click", (e) => {
  e.preventDefault();
  let getWeightValue = +inputWeight.value;
  let getHeightValue = +inputHeight.value/100;
  let imcCalc = (getWeightValue / (getHeightValue*getHeightValue)).toFixed(2)

  resultIMC.innerHTML = imcCalc;
})