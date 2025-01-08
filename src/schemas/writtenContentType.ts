import mongoose, { Schema, Document } from "mongoose";

import { WrittenContentTypeInterface } from "../interfaces/propInterfaces";


const writtenContentTypeSchema: Schema = new mongoose.Schema({
  writtenContentTypeId: { type: Number },
  writtenContentTypeName: { type: String, required: true },
  writtenContentTypeDescription: { type: String, required: true },
  companyUserId: { type: Number },
});


export default mongoose.model<WrittenContentTypeInterface & Document>(
  "WrittenContentType",
  writtenContentTypeSchema
);
