const { uploadToCloudinary } = require('../utils/cloudinaryUpload');

// @desc    Upload image or video
// @route   POST /api/upload
// @access  Public/Admin
const handleUpload = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please select an image or video file to upload.' });
    }

    const isVideo = req.file.mimetype.startsWith('video/');
    const resourceType = isVideo ? 'video' : 'image';

    const result = await uploadToCloudinary(req.file.buffer, 'addymize_uploads', resourceType);

    res.status(200).json({
      success: true,
      message: 'File processed successfully',
      data: {
        url: result.secure_url,
        publicId: result.public_id,
        format: result.format,
        resourceType,
        note: result.note || 'Uploaded via Cloudinary API',
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleUpload };
