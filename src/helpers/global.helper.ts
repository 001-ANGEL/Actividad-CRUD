import { SendResponse } from "../interfaces/global.interface";
import { Response } from "express";

// Helper function to errors
export const handleError = (error: any, action: string) => {
  console.error(`Error in ${action}: `, error);
  throw new Error(`Error in ${action}: ${error.message || error}`);
};


export const sendResponse = ({ res, code, message, data }: SendResponse) => {
  res.status(code).json({ message, data });
};


export const contentNotFound = (content: any, res: Response): boolean => {
  if(!content) {
     sendResponse({
      res,
      code: 404,
      message: "Content not found",
    });
    return true;
  }
  return false
}
