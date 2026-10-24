const cloudinary = require('../config/cloudinary');

/**
 * Uploads a file buffer or base64 data to Cloudinary
 * @param {Buffer|string} file - Buffer or path or data URI
 * @param {string} folder - Destination folder on Cloudinary
 * @param {string} resourceType - 'image' | 'video' | 'auto'
 */
const uploadToCloudinary = (fileBuffer, folder = 'addymize', resourceType = 'auto') => {
  return new Promise((resolve, reject) => {
    // If Cloudinary secret is placeholder, handle mock graceful fallback
    if (!process.env.CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY === '123456789012345') {
      return resolve({
        secure_url: `/uploads/fallback-media-${Date.now()}.png`,
        public_id: `mock-${Date.now()}`,
        format: 'webp',
        resource_type: resourceType,
        note: 'Mock Cloudinary Upload (Provide valid credentials in server/.env to stream to live Cloudinary cloud)'
      });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        transformation: [{ quality: 'auto', fetch_format: 'auto' }],
      },
      (error, result) => {
        if (error) {
          console.error('[Cloudinary Upload Error]:', error);
          return reject(error);
        }
        resolve(result);
      }
    );

    uploadStream.end(fileBuffer);
  });
};

module.exports = { uploadToCloudinary };
