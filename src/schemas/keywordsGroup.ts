import mongoose, { Schema, Document } from "mongoose";

import { KeywordsGroupInterface } from "../interfaces/propInterfaces";

const keywordsGroupSchema: Schema = new mongoose.Schema({
  keywordGroupId: { type: Number },
  groupName: { type: String },
  writtenContentTypeId: { type: Number },
});

export default mongoose.model<KeywordsGroupInterface & Document>(
  "keywordsGroup",
  keywordsGroupSchema
);
