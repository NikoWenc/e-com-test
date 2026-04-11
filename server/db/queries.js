import pool from "./pool.js";

export const getAllProductsQuery = async () => {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
};
