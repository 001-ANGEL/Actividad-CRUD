import mongoose, { Schema, Document } from "mongoose";

import { KeywordGroupInterface } from "../interfaces/schemasInterfaces";

const KeywordsGroupSchema: Schema = new mongoose.Schema(
  {
    groupName: { type: String, required: true },
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "private",
    },
    contentType: { 
      type: Schema.Types.ObjectId,
      ref: "ContentType", 
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<KeywordGroupInterface & Document>(
  "keywordsGroup",
  KeywordsGroupSchema
);
