// * Interfaces for schemas

import { ObjectId } from "mongoose";

export interface ContentTypeInterface {
    contentTypeId: number;
    contentTypeName: string;
    description: string;
    profileId: number;
    visibility: 'public' | 'private';
  }
  
  export interface KeywordsGroupInterface {
    keywordGroupId: number;
    groupName: string;
    ContentTypeId: number;
  }
  
