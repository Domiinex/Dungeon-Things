// targets and finds a text input box
const inputIB = document.getElementById("ib");
const inputIG = document.getElementById("ig");
const inputKP = document.getElementById("kp");
const inputR = document.getElementById("r");
const inputCH = document.getElementById("ch");
const inputRO = document.getElementById("ro");
const inputW = document.getElementById("w");
const inputPL = document.getElementById("pl");
const inputWR = document.getElementById("wr");
const inputWA = document.getElementById("wa");
const inputOC = document.getElementById("oc");
const inputWL = document.getElementById("wl");
const inputSK = document.getElementById("sk");

//Loads the saved value from the localStorage when the page is opened/reloaded
window.onload = function() {
  //finds the value saved in localStorage and puts it into the text input box
  const savedIB = localStorage.getItem("savedIB");
  if (savedIB) {
    inputIB.value = savedIB
  };
  
  const savedIG = localStorage.getItem("savedIG");
  if (savedIG) {
    inputIG.value = savedIG
  };

  const savedKP = localStorage.getItem("savedKP");
  if (savedKP) {
    inputKP.value = savedKP
  };

  const savedR = localStorage.getItem("savedR");
  if (savedR) {
    inputR.value = savedR
  };
  
  const savedCH = localStorage.getItem("savedCH");
  if (savedCH) {
    inputCH.value = savedCH
  };

  const savedRO = localStorage.getItem("savedRO");
  if (savedRO) {
    inputRO.value = savedRO
  };

  const savedW = localStorage.getItem("savedW");
  if (savedW) {
    inputW.value = savedW
  };

  const savedPL = localStorage.getItem("savedPL");
  if (savedPL) {
    inputPL.value = savedPL
  };

  const savedWR = localStorage.getItem("savedWR");
  if (savedWR) {
    inputWR.value = savedWR
  };

  const savedWA = localStorage.getItem("savedWA");
  if (savedWA) {
    inputWA.value = savedWA
  };

  const savedOC = localStorage.getItem("savedOC");
  if (savedOC) {
    inputOC.value = savedOC
  };

  const savedWL = localStorage.getItem("savedWL");
  if (savedWL) {
    inputWL.value = savedWL
  };

  const savedSK = localStorage.getItem("savedSK");
  if (savedSK) {
    inputSK.value = savedSK
  };
};

//finds the button and when it's clicked it saves the text inside the text input box
function saveText() {
  localStorage.setItem("savedIB", inputIB.value);
  localStorage.setItem("savedIG", inputIG.value);
  localStorage.setItem("savedKP", inputKP.value);
  localStorage.setItem("savedR", inputR.value);
  localStorage.setItem("savedCH", inputCH.value);
  localStorage.setItem("savedRO", inputRO.value);
  localStorage.setItem("savedW", inputW.value);
  localStorage.setItem("savedPL", inputPL.value);
  localStorage.setItem("savedWR", inputWR.value);
  localStorage.setItem("savedWA", inputWA.value);
  localStorage.setItem("savedOC", inputOC.value);
  localStorage.setItem("savedWL", inputWL.value);
  localStorage.setItem("savedSK", inputSK.value);
}