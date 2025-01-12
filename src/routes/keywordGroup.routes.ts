import { Router } from "express";

import {
  createKeywordGroupController,
  getAllKeywordGroupsController,
  getKeywordGroupByIdController,
  updateKeywordGroupController,
  deleteKeywordGroupController,
} from "../controllers/keywordGroup.controller";

import {
  requiredField,
  validateContentTypeId,
  validateObjectId,
} from "../middlewares/global.middleware";

const router = Router();

router.post(
  "/api/keyword-group",
  requiredField("groupName"),
  validateContentTypeId,
  createKeywordGroupController
);

router.get("/api/keyword-group", getAllKeywordGroupsController);

router.get("/api/keyword-group/:id", validateObjectId, getKeywordGroupByIdController);

router.put(
  "/api/keyword-group/:id",
  validateObjectId,
  requiredField("groupName"),
  validateContentTypeId,
  updateKeywordGroupController
);

router.delete(
  "/api/keyword-group/:id",
  validateObjectId,
  deleteKeywordGroupController
);

export default router;
