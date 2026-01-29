import { Router } from "express";
import { fetchToken } from "./auth.controller";

const router = Router();
router.get("/token", fetchToken);

export default router;
