/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
  this.title = title;
  this.director = director;
  this.budget = budget;
}
const movie = new Movie("Smile");

class Movie2 {
  constructor(name) {
    this.name = name;
  }
}
const movieClass = new Movie2("Smile2");

function vienaFunkcija() {
  // kazka
}

function antraFunkcija(funkcion3) {
  funkcion3();
}

antraFunkcija(vienaFunkcija());
