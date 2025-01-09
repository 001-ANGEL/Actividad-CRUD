// Helper function to errors
export const handleError = (error: any, action: string) => {
    console.error(`Error in ${action}: `, error);
    throw new Error(`Error in ${action}: ${error.message || error}`);
  };


// convert document to String 
export const documentToString = (document: any) => {
  const convertedDocument = document.toObject();
  convertedDocument._id = convertedDocument._id.toString();
  return convertedDocument;
};
