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
  ContentTypeId: number;
}
