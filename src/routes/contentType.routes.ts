import { Router } from "express";

import {
  createContent,
  getAllContents,
  getContentById,
  updateContentById,
  deleteContentById,
} from "../controllers/content.controller";

const router = Router();

router.post("/api/content-type", createContent);

router.get("/api/content-type", getAllContents);

router.get("/api/content-type/:id", getContentById);

router.put("/api/content-type/:id", updateContentById);

router.delete("/api/content-type/:id", deleteContentById);

export default router;
