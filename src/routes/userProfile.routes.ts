import { Router } from "express";

import {
  createUserProfileController,
  deleteUserProfileController,
  getAllUserProfilesController,
  getUserProfileByIdController,
  updateUserProfileController,
} from "../controllers/userProfile.controller";

import {
  requiredUserId,
  requiredProfileType,
  validateObjectId,
  validateNumber,
} from "../middlewares/global.middleware";

const router = Router();

router.post(
  "/api/user-profile",
  requiredUserId,
  requiredProfileType,
  validateNumber("companyId"),
  createUserProfileController
);

router.get("/api/user-profile", getAllUserProfilesController);

router.get(
  "/api/user-profile/:id",
  validateObjectId,
  getUserProfileByIdController
);

router.put(
  "/api/user-profile/:id",
  validateObjectId,
  requiredUserId,
  requiredProfileType,
  validateNumber("companyId"),
  updateUserProfileController
);

router.delete(
  "/api/user-profile/:id",
  validateObjectId,
  deleteUserProfileController
);

export default router;
