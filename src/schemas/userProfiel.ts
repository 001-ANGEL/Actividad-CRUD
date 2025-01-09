import mongoose, { Schema, Document } from "mongoose";
import { UserProfileInterface } from "../interfaces/schemasInterfaces";

const UserProfileSchema: Schema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    profileType: {
      type: String,
      enum: ["personal", "company"],
      required: true,
    },
    companyId: { type: Number, default: null },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<UserProfileInterface & Document>(
  "UserProfile",
  UserProfileSchema
);

