// Helper function to errors
export const handleError = (error: any, action: string) => {
    console.error(`Error en ${action}: `, error);
    throw new Error(`Error en ${action}: ${error.message || error}`);
  };