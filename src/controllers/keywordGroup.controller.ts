import { Request, Response } from "express";
import {
  createKeywordGroup,
  getAllKeywordGroups,
  getKeywordGroupById,
  updateKeywordGroup,
  deleteKeywordGroup,
} from "../services/keywordGroup.service";

import { KeywordGroupInterface } from "../interfaces/global.interface";
import { contentNotFound, handleError, sendResponse } from "../helpers/global.helper";


export const createKeywordGroupController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: KeywordGroupInterface = req.body;
    const newKeywordGroup = await createKeywordGroup(data);

    sendResponse({
      res,
      code: 201,
      message: "Keyword group created successfully",
      data: newKeywordGroup,
    });
  } catch (error) {
    handleError(error, "create keyword group");
    sendResponse({
      res,
      code: 500,
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
    sendResponse({
      res,
      code: 200,
      message: "Keyword groups fetched successfully",
      data: keywordGroups,
    });
  } catch (error) {
    handleError(error, "fetch keyword groups");
    sendResponse({
      res,
      code: 500,
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

    if (contentNotFound(keywordGroup, res)) return;

    sendResponse({
      res,
      code: 200,
      message: "Keyword group fetched successfully",
      data: keywordGroup,
    });
  } catch (error) {
    handleError(error, "fetch keyword group by ID");
    sendResponse({
      res,
      code: 500,
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

    if (contentNotFound(updatedKeywordGroup, res)) return;

    sendResponse({
      res,
      code: 200,
      message: "Keyword group updated successfully",
      data: updatedKeywordGroup,
    });
  } catch (error) {
    handleError(error, "update keyword group");
    sendResponse({
      res,
      code: 500,
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

    if (contentNotFound(deletedKeywordGroup, res)) return;

    sendResponse({
      res,
      code: 200,
      message: "Keyword group deleted successfully",
      data: deletedKeywordGroup,
    });
  } catch (error) {
    handleError(error, "delete keyword group");
    sendResponse({
      res,
      code: 500,
      message: "An error occurred while deleting the keyword group",
    });
  }
};

