// ** -------------------------------------------------- **
// 3a: Gebruik een array-methode om alle tv merken in een lijst op de pagina weer te geven.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak een variabele waar we alle list-items in op kunnen slaan
// loop over iedere entry van de array heen
// geef voor iedere tv een <li>-element terug met daarin de merknaam van de tv
// Stop deze list-items in het 'anker' element

// const brandsList = document.getElementById('inventory-brands');
//
// const listItems = inventory.map((tv) => {
//   return `<li>${tv.brand}</li>`;
// });
//
// brandsList.innerHTML = `${listItems.join('')}`;

// ** -------------------------------------------------- **
// 3b: chrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
// ** -------------------------------------------------- **

function createBrandList(tvArray) {
  const brandsList = document.getElementById('inventory-brands');

  const listItems = tvArray.map((tv) => {
    return `<li>${tv.brand}</li>`;
  });

  brandsList.innerHTML = `${listItems.join('')}`;
}

createBrandList(inventory);