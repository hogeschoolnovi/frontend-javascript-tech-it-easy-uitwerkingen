// ** -------------------------------------------------- **
// 1a: Gebruik een array-methode om een array te maken met alle tv-type namen
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), stop het tv type (tv.type) in de uitkomst

const tvTypes = inventory.map((tv) => {
  return tv.type;
})

console.log(tvTypes);

// ** -------------------------------------------------- **
// 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// check voor iedere entry in de array (tv) of een item uitverkocht is. Zo ja, dan willen we die behouden
// een tv is uitverkocht wanneer tv.originalStock - tv.sold === 0 of, andere benadering, wanneer tv.originalStock === tv.sold
// log de output in de console

const soldOutItems = inventory.filter((tv) => {
  return tv.originalStock === tv.sold;
})

console.log(soldOutItems);

// ** -------------------------------------------------- **
// 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), check of de tv ambilight heeft
// een tv beschikt over ambiLight wanneer de tv.options.ambiLight property de waarde true heeft
// log de output in de console

const itemsWithAmbi = inventory.filter((tv) => {
  return tv.options.ambiLight === true;
})

console.log(itemsWithAmbi);

// ** -------------------------------------------------- **
// 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), check de hoogte van de prijs (tv.price)
// plaats de tv achter de vorige tv als de waarde lager is
// log de output in de console

// Korte versie
function sortTvs(tvs) {
  // return statement is niet nodig omdat sort wordt toegepast op originele array
  tvs.sort((a, b) => a.price - b.price);
}

// Lange versie
// function sortTvs(tvs) {
//   return tvs.sort((a, b) => {
//     if (a.price - b.price > 0) {
//       return 1;
//     }
//
//     if (a.price - b.price < 0) {
//       return -1;
//     }
//
//     return 0;
//   });
// }

// Let op: deze hoeft niet in een variabele omdat sort altijd wordt toegepast op de originele array!
// (de aanroep is hier uitgecomment zodat de bonusopdracht goed werkt)
// sortTvs(inventory);
console.log(inventory);