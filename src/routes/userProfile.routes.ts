import { Router } from "express";
import {
  createUserProfileController,
  deleteUserProfileController,
  getAllUserProfilesController,
  getUserProfileByIdController,
  updateUserProfileController,
} from "../controllers/userProfile.controller";

const router = Router();

router.post("/api/user-profile", createUserProfileController);

router.get("/api/user-profile", getAllUserProfilesController);

router.get("/api/user-profile/:id", getUserProfileByIdController);

router.put("/api/user-profile/:id", updateUserProfileController);

router.delete("/api/user-profile/:id", deleteUserProfileController);

export default router;
