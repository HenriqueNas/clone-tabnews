import { beforeAll, expect, test, describe } from '@jest/globals';

import database from '@infra/database';

describe('GET /api/v1/migrations', () => {
  var response: Response;
  var body: any;

  beforeAll(async () => {
    await database.query('drop schema public cascade; create schema public;');

    response = await fetch('http://localhost:3000/api/v1/migrations');
    body = await response.json();
  });

  test('should return status 201', () => {
    expect(response.status).toEqual(201);
  });

  test('body should be an array greather than 0', () => {
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  test('database should have a table named `pgmigrations` with NO migrations runned', async () => {
    const { rows: migrations } = await database.query({
      text: 'SELECT * FROM pgmigrations',
    });

    expect(migrations.length).toEqual(0);
  });
});
