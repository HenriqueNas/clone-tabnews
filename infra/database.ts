import { Client } from "pg";

// TODO(@HenriqueNas): fix usage of Bun.env
declare module "bun" {
  interface Env {
    DB_USER: string;
    DB_DATABASE: string;
    DB_PASSWORD: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_URL: string;
  }
}

async function query(queryObject: any): Promise<any> {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();

  const result = await client.query(queryObject);
  await client.end();

  return result;
}

export default {
  query: query,
};
