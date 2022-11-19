/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

// import { one, two, three, four, five } from "./numbers";

import {
  composition,
  division,
  substraction,
  multiplication,
} from "./modules/math";

let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;

let a = composition(one, four);
let b = division(four, two);
let c = $(substraction(three, two));
let d = $(multiplication(five, two));

console.log(a);
console.log(b);
console.log(c);
console.log(d);
