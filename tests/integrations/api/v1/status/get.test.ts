import { expect, test } from "bun:test";

test("GET /api/v1/status should return status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toEqual(200);
});
