import mongoose, { Schema, Document } from "mongoose";

import { ContentTypeInterface } from "../interfaces/global.interface";

const ContentType: Schema = new mongoose.Schema(
  {
    contentTypeName: { type: String, required: true },
    description: { type: String, default: null },
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "private",
    },
    profileId: { type: Number, default: null },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ContentTypeInterface & Document>(
  "ContentType",
  ContentType
);
