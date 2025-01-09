import mongoose, { Schema, Document } from "mongoose";

import { KeywordGroupInterface } from "../interfaces/schemasInterfaces";

const keywordsGroupSchema: Schema = new mongoose.Schema(
  {
    keywordGroupId: { type: Number, default: null },
    groupName: { type: String, required: true },
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "private",
    },
    contentType: { type: Number, default: null },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<KeywordGroupInterface & Document>(
  "keywordsGroup",
  keywordsGroupSchema
);
