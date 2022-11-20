/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

function convertTo(event) {
  const weightInputValue = parseFloat(document.getElementById("search").value);
  const svarai = (weightInputValue * 2.2046).toFixed(1);
  const gramai = (weightInputValue / 0.001).toFixed(1);
  const uncijos = (weightInputValue * 35.274).toFixed(1);
  const outputElement = document.getElementById("output");
  if (weightInputValue >= 0) {
    outputElement.innerText =
      "Svarai: " +
      svarai +
      " " +
      "Gramai: " +
      gramai +
      " " +
      "Uncijos: " +
      uncijos;
  } else {
    outputElement.innerText = "Neįvestas svoris";
  }
  event.preventDefault();
}

document.getElementById("submit-btn").addEventListener("click", convertTo);
