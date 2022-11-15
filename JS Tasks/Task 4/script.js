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
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then((data) => {
      //   console.error(data);
      data.forEach((data) => {
        const markup = `<div id="carCard"> <ol>${
          "Brand: " + data.brand + " "
        }</ol> <ol>${"Model: " + data.models + " "}</ol> </div>`;
        document
          .getElementById("output")
          .insertAdjacentHTML("beforeend", markup);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

// reikia sudeti markup i atskirus DIV

fetchProperties();
