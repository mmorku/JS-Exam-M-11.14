/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie() {
  this.movieDetails = function () {
    this.title = +prompt("Title?");
    this.director = +prompt("Director?");
    this.budget = +prompt("Budet?", 0);
  };

  this.wasExpensive = function () {
    const budgetAmount = parseInt(this.budget, 10);
    if (budgetAmount > 100000000) {
      console.log("True");
    } else {
      console.log("False");
    }
  };
}

let someMovie = new Movie();
someMovie.movieDetails();
someMovie.wasExpensive();
