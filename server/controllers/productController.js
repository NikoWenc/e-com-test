import { getAllProductsQuery } from "../db/queries.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsQuery();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
