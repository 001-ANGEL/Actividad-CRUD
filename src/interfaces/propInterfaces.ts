// * Interfaces for schemas

export interface WrittenContentTypeInterface {
    writtenContentTypeId: number;
    writtenContentTypeName: string;
    writtenContentTypeDescription: string;
    companyUserId: number;
  }
  
  export interface KeywordsGroupInterface {
    keywordGroupId: number;
    groupName: string;
    writtenContentTypeId: number;
  }
  