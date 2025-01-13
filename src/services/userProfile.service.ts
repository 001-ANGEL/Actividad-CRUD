import { UserProfileInterface } from "../interfaces/global.interface";
import UserProfile from "../schemas/userProfile";
import { handleError } from "../helpers/global.helper";

export const createUserProfile = async (data: UserProfileInterface) => {
  try {
    const newUserProfile = new UserProfile(data);
    return await newUserProfile.save();
  } catch (error) {
    handleError(error, "create user profile"); 
  }
};

export const getAllUserProfiles = async () => {
  try {
    return await UserProfile.find();
  } catch (error) {
    handleError(error, "fetch user profiles");
  }
};

export const getUserProfileById = async (id: string) => {
  try {
    const userProfileById = await UserProfile.findById(id);
    if (!userProfileById) {
      throw new Error("User profile not found");
    }
    return userProfileById;
  } catch (error) {
    handleError(error, "fetch user profile by ID");
  }
};

export const updateUserProfile = async (
  id: string,
  updatedData: UserProfileInterface
) => {
  try {
    const updatedUserProfile = await UserProfile.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedUserProfile) {
      throw new Error("User profile not found for update");
    }

    return updatedUserProfile;
  } catch (error) {
    handleError(error, "update user profile");
  }
};

export const deleteUserProfile = async (id: string) => {
  try {
    const deletedUserProfile = await UserProfile.findByIdAndDelete(id);
    if (!deletedUserProfile) {
      throw new Error("User profile not found for deletion");
    }
    return deletedUserProfile;
  } catch (error) {
    handleError(error, "delete user profile");
  }
};
