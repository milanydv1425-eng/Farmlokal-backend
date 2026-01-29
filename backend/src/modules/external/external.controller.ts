import { Request, Response } from "express";
import { fetchExternalData } from "./external.service";

export const getExternal = async (_req: Request, res: Response) => {
  try {
    const response = await fetchExternalData();
    res.json(response.data);
  } catch {
    res.status(200).json({
      message: "External API failed, handled gracefully",
    });
  }
};

export const webhookHandler = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Webhook received" });
};
