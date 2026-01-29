import { Request, Response } from "express";
import { getAccessToken } from "./auth.service";

export const fetchToken = async (_req: Request, res: Response) => {
  const token = await getAccessToken();
  res.json({ access_token: token });
};
