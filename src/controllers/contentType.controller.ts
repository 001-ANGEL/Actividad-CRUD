import { Request, Response } from "express";
import { Schema } from "mongoose";

import ContentType from "../schemas/contentType";
import { ContentTypeInterface } from "../interfaces/schemasInterfaces";
import { documentToString, handleError } from "../middlewares/props";

import {
  deleteContent,
  getContentTypeById,
  updateContent,
} from "../services/contentType.service";

export const createContentTypeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: ContentTypeInterface = req.body;
    const newContent = new ContentType(data);
    const savedContent = await newContent.save();

    res.status(201).json({
      message: "Content type created successfully",
      data: savedContent,
    });
  } catch (error) {
    handleError(error, "Create content");
    res.status(500).json({
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
    res.status(200).json({
      message: "Content types fetched successfully",
      data: contents,
    });
  } catch (error) {
    handleError(error, "An error occurred while fetching the content types");
  }
};

export const getContentTypeByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const  { id } = req.params;
    const contentById = await getContentTypeById(id);
    const contentData = documentToString(contentById);

    res.status(200).json({
      message: "Content fetched successfully",
      data: contentData,
    });
  } catch (error) {
    handleError(error, "fetch content by ID");
    res.status(500).json({
      message: "An error occurred while fetching the content",
    });
  }
};

export const updateContentTypeByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const updatedContent = await updateContent(id, updatedData);

    res.status(200).json({
      message: "Content updated successfully",
      data: updatedContent,
    });
  } catch (error) {
    handleError(error, "update content");
    res.status(500).json({
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

    res.status(200).json({
      message: "Content deleted successfully",
      data: deletedContent,
    });
  } catch (error) {
    handleError(error, "delete content");
    res.status(500).json({
      message: "An error occurred while deleting the content",
    });
  }
};
