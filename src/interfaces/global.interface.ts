import { Response } from "express";
// * Interfaces for schemas

export interface ContentTypeInterface {
  contentTypeName: string;
  description: string;
  profileId: string;
  visibility: "public" | "private";
}

export interface KeywordGroupInterface {
  keywordGroupId: number;
  groupName: string;
  visibility: "public" | "private";
  ContentTypeId: string;
}

export interface UserProfileInterface {
  userId: number;
  profileType: "public" | "private";
  companyId: number;
  isActive: boolean;
}

export interface SendResponse {
  res: Response;
  code: number;
  message: string;
  data?: any;
}