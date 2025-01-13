import mongoose, { Schema, Document } from "mongoose";

import { KeywordGroupInterface } from "../interfaces/global.interface";

const KeywordGroupSchema: Schema = new mongoose.Schema(
  {
    groupName: { type: String, required: true },
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "private",
    },
    contentTypeId: { 
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
  "keywordGroup",
  KeywordGroupSchema
);
