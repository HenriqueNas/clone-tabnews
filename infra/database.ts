import { Client, QueryConfig } from 'pg';

async function query(queryObject: string | QueryConfig): Promise<any> {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV !== 'production' ? false : true,
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);

    return result;
  } catch (error) {
    console.error('error at database.ts `query` method', error);
    throw error;
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
