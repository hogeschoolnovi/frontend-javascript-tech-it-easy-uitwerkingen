
// ** -------------------------------------------------- **
// 2a: Hoeveel tv's zijn er al verkocht?
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een output-variabele
// loop over iedere entry van de array heen (tv)
// tel van iedere tv de verkochte exemplaren op bij het huidige totaal
// log die waarde in de console wanneer de for-loop klaar is

let soldItems = 0;

for (let i = 0; i < inventory.length; i++) {
  soldItems = soldItems + inventory[i].sold;
}

console.log(soldItems);

// ** -------------------------------------------------- **
// 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak twee nieuwe elementen (bijvoorbeeld h3 en h2 waarin we de beschrijving en hoeveelheid items kunnen plaatsen, en zet dit in ons 'anker' element*/
// schrijf styling voor de id van het item

const soldItemsContainer = document.getElementById('items-sold');

soldItemsContainer.innerHTML = `
  <h3>Aantal verkochte items<h3>
  <h2>${soldItems}</h2>
`;

// ** -------------------------------------------------- **
// 2c: Hoeveel tv's heeft Tech It Easy ingekocht?
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een output-variabele
// loop over iedere entry van de array heen (tv)
// tel van iedere tv de ingekochte exemplaren op bij het huidige totaal
// log die waarde in de console wanneer de for-loop klaar is

let originalItems = 0;

for (let i = 0; i < inventory.length; i++) {
  originalItems = originalItems + inventory[i].originalStock;
}

console.log(originalItems);

// ** -------------------------------------------------- **
// 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak twee nieuwe elementen (bijvoorbeeld h3 en h2 waarin we de beschrijving en hoeveelheid items kunnen plaatsen, en zet dit in ons 'anker' element*/
// schrijf styling voor de id van het item

const originalItemsContainer = document.getElementById('original-items');

originalItemsContainer.innerHTML = `
  <h3>Aantal ingekochte items<h3>
  <h2>${originalItems}</h2>
`;

// ** -------------------------------------------------- **
// 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak twee nieuwe elementen (bijvoorbeeld h3 en h2 waarin we de beschrijving en hoeveelheid items kunnen plaatsen, en zet dit in ons 'anker' element*/
// schrijf styling voor de id van het item

const itemsToSellContainer = document.getElementById('items-left-to-sell');

itemsToSellContainer.innerHTML = `
  <h3>Items te verkopen<h3>
  <h2>${originalItems - soldItems}</h2>
`;