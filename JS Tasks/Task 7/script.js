/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

const propertiesNames = Object.keys(audi);
console.log(propertiesNames);

// ar kosnole skaitosi masyvas?
// 6,7, sudet i funkcijas
