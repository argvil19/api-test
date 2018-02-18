const multer = require('multer');
const fileExtension = require('file-extension');
const { videoStoragePath } = require('./vars');

exports.diskStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, videoStoragePath),
    filename: (req, file, cb) => {
        cb(null, 'video-' + req.user._id + '-' + Date.now() + '.' + fileExtension(file.originalname));
    }
});
