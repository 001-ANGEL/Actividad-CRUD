import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const validateObjectId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: `Invalid ID: ${id}`,
    });
    return;
  }
  next();
};

export const requiredField = (fieldName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const value = req.body[fieldName];

    if (!value) {
      res.status(400).json({
        message: `The field '${fieldName}' is required`,
      });
      return;
    }

    if (!isNaN(value)) {
      res.status(400).json({
        message: "It must be a valid name, not a number",
      });
      return;
    }

    next();
  };
};

export const validateContentTypeId = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { contentTypeId } = req.body;

  if (!contentTypeId) {
    res.status(400).json({
      message: "The field 'contentTypeId' is required",
    });
    return;
  }

  if (!mongoose.Types.ObjectId.isValid(contentTypeId)) {
    res.status(400).json({
      message: `Invalid contentTypeId: ${contentTypeId}`,
    });
    return;
  }

  next();
};

export const requiredUserId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400).json({
      message: "The field 'userId' is required",
    });
    return;
  }

  if (typeof userId !== "number") {
    res.status(400).json({
      message: "It must be a valid number",
    });
    return;
  }
  next();
};

export const requiredProfileType = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileType } = req.body;

  if (!profileType) {
    res.status(400).json({
      message: "The field 'profileType' is required",
    });
    return;
  }

  next();
};

export const validateNumber = (fieldName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const value = req.body[fieldName];

    if (typeof value !== "number") {
      res.status(400).json({
        message: `The field ${fieldName} must be a valid number`,
      });
      return;
    }
    next();
  };
};
