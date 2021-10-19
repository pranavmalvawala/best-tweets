import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";

type Tweet = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Tweet>) {
  res.status(StatusCodes.OK).json({ name: "Pranav" });
}
