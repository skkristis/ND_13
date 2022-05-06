"use strict";

console.log("Pirma uzduotis!");

do {
  var price = prompt("Įveskite prekės kainą");
  price = Number(price);
} while (isNaN(price) || price <= 0);

do {
  var pristatymas = prompt("Ar reikalingas pristatymas į namus? (taip/ne)");
} while ((pristatymas == "taip") === false && (pristatymas == "ne") === false);

if (pristatymas == "taip") {
  do {
    var miestas = prompt("Į kurį miestą reiks pristatyti?");
  } while (isNaN(miestas) == false);

  var kainaPristatymo = 2;
  var suPristatymu = price + kainaPristatymo;
  console.log("");
  console.log(" Prekės kaina: " + price.toFixed(2) + " €");
  console.log(" Pristatymas: " + kainaPristatymo.toFixed(2) + " €");
  console.log(" Pristatymas: " + suPristatymu.toFixed(2) + " €");
  console.log("");
  console.log(" Prekę pristatysime į " + miestas + " per 1-3 dienas.");
  console.log("");
} else {
  console.log("");
  console.log(" Prekės kaina: " + price.toFixed(2) + " €");
  console.log("");
  console.log(" Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
  console.log("");
}
console.log("******************************************************");
console.log("Antra uzduotis!");
console.log("");
console.log("(Šalių parametrai išgalvoti)");
console.log("");

var salys = [
  { pavadinimas: "Lenkija", plotas: 659402, gyventojuSkaicius: 1425334 },
  { pavadinimas: "Puerto Rico", plotas: 326234, gyventojuSkaicius: 5225346 },
  { pavadinimas: "Maldyvai", plotas: 523512, gyventojuSkaicius: 3745453 },
  { pavadinimas: "Japonija", plotas: 213464, gyventojuSkaicius: 7332563 },
  { pavadinimas: "Italija", plotas: 424124, gyventojuSkaicius: 9125423 },
];

function pasaulioSalys(pavadinimas, gyventojuSkaicius, plotas) {
  console.log(`Šalis: ${pavadinimas}, joje gyvena ${(gyventojuSkaicius / 1000000).toFixed(2)} mln. gyventojų.`);
  console.log(`Valstybės plotas: ${plotas} km², plotas tenkantis vienam gyventojui: ${((plotas / gyventojuSkaicius) * 1000000).toFixed(2)} m².`);
  console.log("");
}

for (var x of salys) {
  pasaulioSalys(x.pavadinimas, x.gyventojuSkaicius, x.plotas);
}
