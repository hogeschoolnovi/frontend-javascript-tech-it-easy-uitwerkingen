
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
// maak twee nieuwe elementen (bijvoorbeeld h3 en h2) waarin we de beschrijving en hoeveelheid items kunnen plaatsen
// Voeg deze toe aan ons 'anker' element
// schrijf styling voor de id van het item

const soldItemsContainer = document.getElementById('items-sold');

const soldItemsTitle = document.createElement('h3');
soldItemsTitle.textContent = 'Aantal verkochte items';
const soldItemsAmount = document.createElement('h2');
soldItemsAmount.textContent = soldItems;

soldItemsContainer.appendChild(soldItemsTitle);
soldItemsContainer.appendChild(soldItemsAmount);

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
// maak twee nieuwe elementen (bijvoorbeeld h3 en h2) waarin we de beschrijving en hoeveelheid items kunnen plaatsen
// Voeg deze toe aan ons 'anker' element
// schrijf styling voor de id van het item

const originalItemsContainer = document.getElementById('original-items');

const originalItemsTitle = document.createElement('h3');
originalItemsTitle.textContent = 'Aantal verkochte items';
const originalItemsAmount = document.createElement('h2');
originalItemsAmount.textContent = soldItems;

originalItemsContainer.appendChild(originalItemsTitle);
originalItemsContainer.appendChild(originalItemsAmount);

// ** -------------------------------------------------- **
// 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak twee nieuwe elementen (bijvoorbeeld h3 en h2) waarin we de beschrijving en hoeveelheid items kunnen plaatsen
// Voeg deze toe aan ons 'anker' element
// schrijf styling voor de id van het item

const itemsToSellContainer = document.getElementById('items-left-to-sell');

const toSellItemsTitle = document.createElement('h3');
toSellItemsTitle.textContent = 'Aantal verkochte items';
const toSellItemsAmount = document.createElement('h2');
toSellItemsAmount.textContent = `${originalItems - soldItems}`;

itemsToSellContainer.appendChild(toSellItemsTitle);
itemsToSellContainer.appendChild(toSellItemsAmount);