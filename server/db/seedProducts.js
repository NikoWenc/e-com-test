import pool from "./pool.js";
import fs from "fs";

const mensProduct = JSON.parse(
  fs.readFileSync(new URL("./products/mens.json", import.meta.url), "utf-8"),
);
const womensProduct = JSON.parse(
  fs.readFileSync(new URL("./products/womens.json", import.meta.url), "utf-8"),
);
const jeweleryProduct = JSON.parse(
  fs.readFileSync(new URL("./products/jewel.json", import.meta.url), "utf-8"),
);
const electronicsProduct = JSON.parse(
  fs.readFileSync(
    new URL("./products/electronics.json", import.meta.url),
    "utf-8",
  ),
);

const products = [
  ...mensProduct,
  ...womensProduct,
  ...jeweleryProduct,
  ...electronicsProduct,
];

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
