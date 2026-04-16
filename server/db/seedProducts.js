import pool from "./pool.js";
import fs from "fs";

const products = JSON.parse(
  fs.readFileSync(new URL("./products.json", import.meta.url), "utf-8"),
);

async function main() {
  try {
    console.log("seeding...");
    for (const product of products) {
      const { title, price, description, category, image } = product;
      await pool.query(
        "INSERT INTO products (title, price, description, category, image) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (title) DO UPDATE SET price = EXCLUDED.price, description = EXCLUDED.description, category = EXCLUDED.category, image = EXCLUDED.image",
        [title, price, description, category, image],
      );
    }
    console.log("done");
  } catch (error) {
    console.error("Error seeding products:", error);
  } finally {
    await pool.end();
  }
}

main();
