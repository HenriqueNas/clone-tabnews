import { NextApiRequest, NextApiResponse } from "next/types";
import database from "@infra/database";

async function status(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const result = await database.query("SELECT 1 + 1;");

  console.log(result.rows);

  response.status(200).json({ status: "OK" });
}

export default status;
