import { Request, Response } from "express";
import { fetchExternalData } from "./external.service";

export const getExternal = async (_req: Request, res: Response) => {
  const data = await fetchExternalData();
  res.json(data.data);
};

export const webhookHandler = async (req: Request, res: Response) => {
  const eventId = req.headers["x-event-id"];
  if (!eventId) return res.status(400).send("Missing event id");

  // idempotency placeholder (Redis later)
  res.status(200).send("Webhook received");
};
