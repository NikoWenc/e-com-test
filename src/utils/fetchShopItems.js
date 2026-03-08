function fetchShopItems() {
  const items = fetch("https://fakestoreapi.com/products");
  return items;
}

export default fetchShopItems;
