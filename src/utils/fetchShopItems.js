import axios from "axios";

async function fetchShopItems() {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
}

export default fetchShopItems;
