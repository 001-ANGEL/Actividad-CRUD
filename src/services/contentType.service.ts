import { ContentTypeInterface } from "../interfaces/schemasInterfaces";
import ContentType from "../schemas/contentType";
import { handleError } from "../middlewares/props";

export const createContentType = async (data: ContentTypeInterface) => {
  try {
    const newContent = new ContentType(data);
    return await newContent.save();
  } catch (error) {
    handleError(error, "create content");
  }
};

export const getAllContentType = async () => {
  try {
    return await ContentType.find();
  } catch (error) {
    handleError(error, "fetch contents");
  }
};

export const getContentTypeById = async (id: string) => {
  try {

    const contentById = await ContentType.findById(id);
    if (!contentById) {
      throw new Error("Content not found");
    }
    return contentById;
  } catch (error) {
    handleError(error, "fetch content by ID");
  }
};

export const updateContent = async (
  id: string,
  updatedData: ContentTypeInterface
) => {
  try {
    const updatedContent = await ContentType.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true, // Returns the updated document rather than the original
        runValidators: true, // Ensures that the document is validated before update
      }
    );
    if (!updatedContent) {
      throw new Error("Content not found for update");
    }

    return updatedContent;
  } catch (error) {
    handleError(error, "update content");
  }
};

export const deleteContent = async (id: string) => {
  try {
    const deletedContent = await ContentType.findByIdAndDelete(id);
    if (!deletedContent) {
      throw new Error("Content not found for deletion");
    }
    return deletedContent;
  } catch (error) {
    handleError(error, "delete content");
  }
};
