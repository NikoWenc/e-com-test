async function fetchShopItems() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const items = await response.json();
  return items;
}

export default fetchShopItems;
