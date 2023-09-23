import { NextApiRequest, NextApiResponse } from "next/types";

function status(request: NextApiRequest, response: NextApiResponse): void {
  response.status(200).json({ status: "OK" });
}

export default status;
