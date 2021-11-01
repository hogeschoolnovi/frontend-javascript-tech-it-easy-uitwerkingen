// * **Opdracht 5e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
// natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
// overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
// te roepen!

// ** -------------------------------------------------- **
// 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object verwacht en de naam samenvoegt.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// als we één tv object aangeleverd krijgen, pak daar dan de naam (tv.name), merk (tv.brand) en type (tv.type) uit
// plak [merk] [type] - [naam] aan elkaar en geef deze string terug
// als de dit zouden willen herhalen voor alle tv's, willen we dat dit herbruikbaar is => functie!

function createTvName(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
  // dit mag ook:
  // return tv.brand + ' ' + tv.type + ' - ' + tv.name;
}

// ** -------------------------------------------------- **
// 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// als we één tv-prijs als getal aangeleverd krijgen, plak daar dan een euro-teken en ,- bij.
// geef het eindresultaat terug

function createTvPrice(price) {
  return `€${price},-`;
  // dit mag ook:
  // return '€ ' + tv.price + ',-';
}

// ** -------------------------------------------------- **
// 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// we gaan ervan uit dat we een array van beschikbare scherm-groottes aangeleverd krijgen
// we hebben een eind-string nodig om alle sizes in op te slaan
// voor iedere size:
// geef de size weer + 'inches'
// reken de inches om in cm en zet het tussen haakjes met 'cm' erachter
// als er nog een size achter komt te staan, scheid ze dan met een |
// als de dit zouden willen herhalen voor alle tv's, willen we dat dit herbruikbaar is => dus gebruiken we een functie!

function createScreenSizesString(sizesArray) {
  let output = '';

  for (let i = 0; i < sizesArray.length; i++) {
    const currentSizeInches = sizesArray[i];
    const currentSizeCm = sizesArray[i] * 2.54;

    // Format de string
    output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

    // Als we nog NIET bij de laatste size zijn, voeg dan een | toe aan het eind
    if (i < sizesArray.length - 1) {
      output = `${output} | `;
    }
  }

  return output;
}

// ** -------------------------------------------------- **
// 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// 1. maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<div id="single-tv"></div> gemaakt)
// 2. sla de referentie naar dit element op
// 3. Maak een HTML element (<h3>) aan voor de naam van de tv
//      genereer de tv naam met de functie uit 4a
//      stop deze naam als tekst in het element
//      voeg het element aan het <div> element toe
// 4. maak een HTML element (<h4>) aan voor de prijs van de tv
//      genereer de tv prijs met de functie uit 4b
//      stop deze string als tekst in het element
//      voeg het element aan het <div> element toe
// 5. maak een HTML element (<p>) aan voor de schermgroottes van de tv
//      genereer de schermgroottes-string met de functie uit 4c
//      stop deze string als tekst in het element
//      voeg het element aan het <div> element toe

const singleTvContainer = document.getElementById('single-tv');

singleTvContainer.innerHTML = `
  <h3>${createTvName(inventory[3])}</h3>
  <h4>${createTvPrice(inventory[3].price)}</h4>
  <p>${createScreenSizesString(inventory[3].availableSizes)}</p>
`;

function generateTvList(tvArray) {
  const tvModelList = document.getElementById('inventory-models');

  const modelItems = tvArray.map((tvObject) => {
    return `
      <li>
        <h3>${createTvName(tvObject)}</h3>
        <h4>${createTvPrice(tvObject.price)}</h4>
        <p>${createScreenSizesString(tvObject.availableSizes)}</p>
      </li>
    `;
  });

  tvModelList.innerHTML = `${modelItems.join('')}`;
}

generateTvList(inventory);


