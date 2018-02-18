const { parseVideo } = require('../../helpers/parse_video');
const { videoStoragePath } = require('../../config/vars');

exports.uploadVideo = (req, res, next) => {
  if (!req.file) {
    return res.json(400);
  }
  
  parseVideo(req.file.filename, req.file.path, (err, path) => {
    if (err) {
      return res.json(500);
    }
    
    res.json(path);
  });
}
