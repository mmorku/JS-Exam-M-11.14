/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'cars.json';

function fetchProperties() {
  fetch("./cars.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((cars) => {
      cars.forEach((car) => {
        const markup = `<div id="carCard"> <ol>${
          "Brand: " + car.brand + " "
        }</ol> <ol>${"Model: " + car.models + " "}</ol> </div>`;

        document
          .getElementById("output")
          .insertAdjacentHTML("beforeend", markup);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchProperties();
