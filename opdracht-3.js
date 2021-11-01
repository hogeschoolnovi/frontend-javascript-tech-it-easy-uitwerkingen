// ** -------------------------------------------------- **
// 3a: Gebruik een array-methode om alle tv merken in een lijst op de pagina weer te geven.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// loop[ over iedere entry van de array heen
// maak voor iedere entry:
//  een nieuw <li> element
//  stop daar de naam van de huidige tv in
//  voeg dit element toe aan het 'anker'-element

// const brandsList = document.getElementById('inventory-brands');
//
// inventory.map((tv) => {
//   const listItem = document.createElement('li');
//   listItem.textContent = tv.brand;
//
//  return brandsList.appendChild(listItem);
// });

// ** -------------------------------------------------- **
// 3b: chrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
// ** -------------------------------------------------- **

function createBrandList(tvArray) {
  const brandsList = document.getElementById('inventory-brands');

  inventory.map((tv) => {
    const listItem = document.createElement('li');
    listItem.textContent = tv.brand;

    return brandsList.appendChild(listItem);
  });
}

createBrandList(inventory);