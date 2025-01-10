// Helper function to errors
export const handleError = (error: any, action: string) => {
    console.error(`Error in ${action}: `, error);
    throw new Error(`Error in ${action}: ${error.message || error}`);
  };

