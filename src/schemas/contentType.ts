import mongoose, { Schema, Document } from "mongoose";

import { ContentTypeInterface } from "../interfaces/schemasInterfaces";

const ContentType: Schema = new mongoose.Schema(
  {
    ContentTypeId: { type: Number, default: null },
    ContentTypeName: { type: String, required: true },
    Description: { type: String, default: null },
    profileId: { type: Number, default: null },
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "private",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ContentTypeInterface & Document>(
  "ContentType",
  ContentType
);
