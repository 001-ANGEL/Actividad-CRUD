import { KeywordGroupInterface } from "../interfaces/global.interface";
import KeywordGroup from "../schemas/keywordGroup";
import { handleError } from "../helpers/global.helper";

export const createKeywordGroup = async (data: KeywordGroupInterface) => {
  try {
    const newKeywordGroup = new KeywordGroup(data);
    return await newKeywordGroup.save();
  } catch (error) {
    handleError(error, "create keyword group");
  }
};

export const getAllKeywordGroups = async () => {
  try {
    return await KeywordGroup.find();
  } catch (error) {
    handleError(error, "fetch keyword groups");
  }
};

export const getKeywordGroupById = async (id: string) => {
  try {
    const keywordGroupById = await KeywordGroup.findById(id);
    if (!keywordGroupById) {
      return null;
    }
    return keywordGroupById;
  } catch (error) {
    handleError(error, "fetch keyword group by ID");
  }
};

export const updateKeywordGroup = async (
  id: string,
  updatedData: KeywordGroupInterface
) => {
  try {
    const updatedKeywordGroup = await KeywordGroup.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedKeywordGroup) {
      return null
    }

    return updatedKeywordGroup;
  } catch (error) {
    handleError(error, "update keyword group");
  }
};

export const deleteKeywordGroup = async (id: string) => {
  try {
    const deletedKeywordGroup = await KeywordGroup.findByIdAndDelete(id);
    if (!deletedKeywordGroup) {
      return null;
    }
    return deletedKeywordGroup;
  } catch (error) {
    handleError(error, "delete keyword group");
  }
};
