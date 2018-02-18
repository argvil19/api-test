const mongoose = require('mongoose');

/**
 * Video Schema
 * @private
 */
const VideoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  captionFile: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

/**
 * @typedef Video
 */
const Video = mongoose.model('Video', VideoSchema);
module.exports = Video;
