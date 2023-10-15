export const API_URL = "http://localhost:8000";
// export const API_URL = "https://ecom.rakibwrites.com";

/**
 *
 * @param {String} image_type ["landscape", "portrait"]
 * @param {String} size ["large", "small"]
 * @param {String} image_name image name
 * @returns image url
 */
export const Image_url = (image_type, size, image_name) => {
  return `${API_URL}/images/${image_type}/${size}/${image_name}`;
};
