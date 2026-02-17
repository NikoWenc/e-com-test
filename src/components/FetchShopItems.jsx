function FetchShopItems() {
  const items = fetch("https://fakestoreapi.com/products");
  return items;
}

export default FetchShopItems;
