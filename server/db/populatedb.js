import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const SQL = `
    CREATE TABLE products (
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT,
        category VARCHAR(100),
        image TEXT,
        rating_rate DECIMAL(3, 2) DEFAULT 0,
        rating_count INTEGER DEFAULT 0
    );`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
