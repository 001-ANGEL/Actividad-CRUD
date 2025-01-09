import { Router } from "express";

import {
    createKeywordGroupController,
    getAllKeywordGroupsController,
    getKeywordGroupByIdController,
    updateKeywordGroupController,
    deleteKeywordGroupController
} from "../controllers/keywordGroup.controller";

const router = Router();

router.post("/api/keyword-group", createKeywordGroupController);

router.get("/api/keyword-group", getAllKeywordGroupsController);

router.get("/api/keyword-group/:id", getKeywordGroupByIdController);

router.put("/api/keyword-group/:id",updateKeywordGroupController);

router.delete("/api/keyword-group/:id", deleteKeywordGroupController);

export default router;
