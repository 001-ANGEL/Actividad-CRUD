import { Request, Response } from "express";
import ContentType from "../schemas/contentType";
import { ContentTypeInterface } from "../interfaces/global.interface";
import { handleError, sendResponse } from "../helpers/global.helper";
import {
  getContentTypeById,
  updateContent,
  deleteContent,
} from "../services/contentType.service";
import { contentNotFound } from "../helpers/global.helper";

export const createContentTypeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: ContentTypeInterface = req.body;
    const newContent = new ContentType(data);
    const savedContent = await newContent.save();

    sendResponse({
      res,
      code: 201,
      message: "Content type created successfully",
      data: savedContent,
    });
  } catch (error) {
    handleError(error, "Create content");
    sendResponse({
      res,
      code: 500,
      message: "An error occurred while creating the content type",
    });
  }
};

export const getAllContentsTypeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contents = await ContentType.find();
    sendResponse({
      res,
      code: 200,
      message: "Content types fetched successfully",
      data: contents,
    });
  } catch (error) {
    handleError(error, "Fetch content types");
    sendResponse({
      res,
      code: 500,
      message: "An error occurred while fetching the content types",
    });
  }
};

export const getContentTypeByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const contentById = await getContentTypeById(id);

    if(contentNotFound(contentById, res)) return;

    sendResponse({
      res,
      code: 200,
      message: "Content fetched successfully",
      data: contentById,
    });
  } catch (error) {
    handleError(error, "Fetch content by ID");
    sendResponse({
      res,
      code: 500,
      message: "An error occurred while fetching the content",
    });
  }
};

export const updateContentTypeByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedContent = await updateContent(id, updatedData);

    if (contentNotFound(updatedContent, res)) return;

    sendResponse({
      res,
      code: 200,
      message: "Content updated successfully",
      data: updatedContent,
    });
  } catch (error) {
    handleError(error, "Update content");
    sendResponse({
      res,
      code: 500,
      message: "An error occurred while updating the content",
    });
  }
};

export const deleteContentTypeByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedContent = await deleteContent(id);

    if (contentNotFound(deletedContent, res)) return;

    sendResponse({
      res,
      code: 200,
      message: "Content deleted successfully",
      data: deletedContent,
    });
  } catch (error) {
    handleError(error, "Delete content");
    sendResponse({
      res,
      code: 500,
      message: "An error occurred while deleting the content",
    });
  }
};