import { Router } from "express";

import {
  createContentTypeController,
  getAllContentsTypeController,
  getContentTypeByIdController,
  updateContentTypeByIdController,
  deleteContentTypeByIdController,
} from "../controllers/contentType.controller";

const router = Router();

router.post("/api/content-type", createContentTypeController);

router.get("/api/content-type", getAllContentsTypeController);

router.get("/api/content-type/:id", getContentTypeByIdController);

router.put("/api/content-type/:id", updateContentTypeByIdController);

router.delete("/api/content-type/:id", deleteContentTypeByIdController);

export default router;
