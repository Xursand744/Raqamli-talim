const API_BASE_URL = "https://center.it-istedod.uz";

/**
 * Transforms an image URL to use the correct API path
 * @param {string} imagePath - The original image path from the API
 * @returns {string} The transformed image URL with the correct API path
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) return "/placeholder.svg";
  
  // Remove the base URL if it exists
  const cleanPath = imagePath.replace(API_BASE_URL, '');
  
  // Remove leading slash if it exists
  const pathWithoutLeadingSlash = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath;
  
  // Construct the new URL with the API path
  return `${API_BASE_URL}/api/v1/files/${pathWithoutLeadingSlash}`;
}; 