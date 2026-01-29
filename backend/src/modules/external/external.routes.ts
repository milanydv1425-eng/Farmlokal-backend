import { Router } from "express";
import { getExternal, webhookHandler } from "./external.controller";

const router = Router();

router.get("/sync", getExternal);
router.post("/webhook", webhookHandler);

export default router;
