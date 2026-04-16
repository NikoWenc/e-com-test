import axios from "axios";

const API_URL = import.meta.env.VITE_PRODUCTS_API_URL;

async function fetchShopItems() {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
}

export default fetchShopItems;
