import mongoose, { Schema, Document } from "mongoose";

import { KeywordsGroupInterface } from "../interfaces/schemasInterfaces";

const keywordsGroupSchema: Schema = new mongoose.Schema(
  {
    keywordGroupId: { type: Number },
    groupName: { type: String },
    writtenContentTypeId: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<KeywordsGroupInterface & Document>(
  "keywordsGroup",
  keywordsGroupSchema
);
