const sortPriceButton = document.getElementById('sort-price-button');
const filterAmbilightButton = document.getElementById('sort-ambilight-button');
const filterSoldOutButton = document.getElementById('sort-sold-out-button');

sortPriceButton.addEventListener('click', displaySortedTvs);
filterAmbilightButton.addEventListener('click', displayAmbilightTvs);
filterSoldOutButton.addEventListener('click', displaySoldOutTvs);

function displaySortedTvs() {
  // verwijder eerst alle bestaande elementen in de lijst
  const tvModelList = document.getElementById('inventory-models');
  tvModelList.querySelectorAll('li').forEach((element) => element.remove());

  // voeg de gesorteerde elementen toe aan de lijst
  sortTvs(inventory);
  generateTvList(inventory);
}

function displayAmbilightTvs() {
  // verwijder eerst alle bestaande elementen in de lijst
  const tvModelList = document.getElementById('inventory-models');
  tvModelList.querySelectorAll('li').forEach((element) => element.remove());

  // voeg de gefilterde elementen toe aan de lijst
  const itemsWithAmbi = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
  })
  generateTvList(itemsWithAmbi);
}

function displaySoldOutTvs() {
  // verwijder eerst alle bestaande elementen in de lijst
  const tvModelList = document.getElementById('inventory-models');
  tvModelList.querySelectorAll('li').forEach((element) => element.remove());

  // voeg de gefilterde elementen toe aan de lijst
  const soldOutItems = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
  })
  generateTvList(soldOutItems);
}