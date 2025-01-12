import { Router } from "express";

import {
  createContentTypeController,
  getAllContentsTypeController,
  getContentTypeByIdController,
  updateContentTypeByIdController,
  deleteContentTypeByIdController,
} from "../controllers/contentType.controller";

import {
  validateObjectId,
  requiredField,
  validateNumber,
} from "../middlewares/global.middleware";

const router = Router();

router.post(
  "/api/content-type",
  requiredField("contentTypeName"),
  validateNumber("profileId"),
  createContentTypeController
);

router.get("/api/content-type", getAllContentsTypeController);

router.get(
  "/api/content-type/:id",
  validateObjectId,
  getContentTypeByIdController
);

router.put(
  "/api/content-type/:id",
  validateObjectId,
  requiredField("contentTypeName"),
  validateNumber("profileId"),
  updateContentTypeByIdController
);

router.delete(
  "/api/content-type/:id",
  validateObjectId,
  deleteContentTypeByIdController
);

export default router;
