/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.setValues = function () {
    this.a = +prompt("First value?", 0);
    this.b = +prompt("Second value?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };
  this.sub = function () {
    return this.a - this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
  this.div = function () {
    return this.a / this.b;
  };
}

let calculator = new Calculator();
calculator.setValues();

alert("Sum=" + calculator.sum());
alert("Substraction=" + calculator.sub());
alert("Multiplication=" + calculator.mul());
alert("Division=" + calculator.div());
