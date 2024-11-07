import { Client } from 'pg';

declare namespace global {
  interface ProcessEnv {
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

  try {
    await client.connect();
    const result = await client.query(queryObject);

    return result;
  } catch (error) {
    console.error('error at database.ts `query` method', error);
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
