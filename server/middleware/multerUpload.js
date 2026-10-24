const multer = require('multer');

// Store memory buffer for direct streaming to Cloudinary or disk
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 25 * 1024 * 1024, // 25MB max for images and short demo videos
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are supported!'), false);
    }
  },
});

module.exports = upload;
