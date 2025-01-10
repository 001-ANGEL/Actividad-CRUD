// * Interfaces for schemas

export interface ContentTypeInterface {
  contentTypeId: number;
  contentTypeName: string;
  description: string;
  profileId: number;
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
