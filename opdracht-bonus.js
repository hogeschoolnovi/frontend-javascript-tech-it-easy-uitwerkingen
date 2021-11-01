const sortPriceButton = document.getElementById('sort-price-button');
const filterAmbilightButton = document.getElementById('sort-ambilight-button');
const filterSoldOutButton = document.getElementById('sort-sold-out-button');

sortPriceButton.addEventListener('click', displaySortedTvs);
filterAmbilightButton.addEventListener('click', displayAmbilightTvs);
filterSoldOutButton.addEventListener('click', displaySoldOutTvs);

function displaySortedTvs() {
  sortTvs(inventory);
  generateTvList(inventory);
}

function displayAmbilightTvs() {
  const itemsWithAmbi = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
  })
  generateTvList(itemsWithAmbi);
}

function displaySoldOutTvs() {
  const soldOutItems = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
  })
  generateTvList(soldOutItems);
}