import { Request, Response } from "express";
import {
  createUserProfile,
  getAllUserProfiles,
  getUserProfileById,
  updateUserProfile,
  deleteUserProfile,
} from "../services/userProfile.service";
import { handleError } from "../middlewares/props";

export const createUserProfileController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = req.body;
    const newUserProfile = await createUserProfile(data);

    res.status(201).json({
      message: "User profile created successfully",
      data: newUserProfile,
    });
  } catch (error) {
    handleError(error, "create user profile");
    res.status(500).json({
      message: "An error occurred while creating the user profile",
    });
  }
};

export const getAllUserProfilesController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userProfiles = await getAllUserProfiles();
    res.status(200).json({
      message: "User profiles fetched successfully",
      data: userProfiles,
    });
  } catch (error) {
    handleError(error, "fetch user profiles");
    res.status(500).json({
      message: "An error occurred while fetching user profiles",
    });
  }
};

export const getUserProfileByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const userProfile = await getUserProfileById(id);

    res.status(200).json({
      message: "User profile fetched successfully",
      data: userProfile,
    });
  } catch (error) {
    handleError(error, "fetch user profile by ID");
    res.status(500).json({
      message: "An error occurred while fetching the user profile",
    });
  }
};

export const updateUserProfileController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedUserProfile = await updateUserProfile(id, updatedData);

    res.status(200).json({
      message: "User profile updated successfully",
      data: updatedUserProfile,
    });
  } catch (error) {
    handleError(error, "update user profile");
    res.status(500).json({
      message: "An error occurred while updating the user profile",
    });
  }
};

export const deleteUserProfileController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedUserProfile = await deleteUserProfile(id);

    res.status(200).json({
      message: "User profile deleted successfully",
      data: deletedUserProfile,
    });
  } catch (error) {
    handleError(error, "delete user profile");
    res.status(500).json({
      message: "An error occurred while deleting the user profile",
    });
  }
};
