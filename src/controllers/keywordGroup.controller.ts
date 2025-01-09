import { Request, Response } from "express";
import { 
  createKeywordGroup, 
  getAllKeywordGroups, 
  getKeywordGroupById, 
  updateKeywordGroup, 
  deleteKeywordGroup 
} from "../services/keywordGroup.service";
import { KeywordGroupInterface } from "../interfaces/schemasInterfaces";
import { documentToString, handleError } from "../middlewares/props";

export const createKeywordGroupController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: KeywordGroupInterface = req.body;
    const newKeywordGroup = await createKeywordGroup(data);

    res.status(201).json({
      message: "Keyword group created successfully",
      data: newKeywordGroup,
    });
  } catch (error) {
    handleError(error, "create keyword group");
    res.status(500).json({
      message: "An error occurred while creating the keyword group",
    });
  }
};

export const getAllKeywordGroupsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const keywordGroups = await getAllKeywordGroups();
    res.status(200).json({
      message: "Keyword groups fetched successfully",
      data: keywordGroups,
    });
  } catch (error) {
    handleError(error, "fetch keyword groups");
    res.status(500).json({
      message: "An error occurred while fetching the keyword groups",
    });
  }
};

export const getKeywordGroupByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const keywordGroup = await getKeywordGroupById(id);
    const contentData = documentToString(keywordGroup);

    res.status(200).json({
      message: "Keyword group fetched successfully",
      data: contentData,
    });
  } catch (error) {
    handleError(error, "fetch keyword group by ID");
    res.status(500).json({
      message: "An error occurred while fetching the keyword group",
    });
  }
};

export const updateKeywordGroupController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedData: KeywordGroupInterface = req.body;
    const updatedKeywordGroup = await updateKeywordGroup(id, updatedData);

    res.status(200).json({
      message: "Keyword group updated successfully",
      data: updatedKeywordGroup,
    });
  } catch (error) {
    handleError(error, "update keyword group");
    res.status(500).json({
      message: "An error occurred while updating the keyword group",
    });
  }
};

export const deleteKeywordGroupController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedKeywordGroup = await deleteKeywordGroup(id);

    res.status(200).json({
      message: "Keyword group deleted successfully",
      data: deletedKeywordGroup,
    });
  } catch (error) {
    handleError(error, "delete keyword group");
    res.status(500).json({
      message: "An error occurred while deleting the keyword group",
    });
  }
};
