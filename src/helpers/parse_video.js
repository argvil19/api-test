const { exec } = require('child_process');
const { ffmpegPath, subOutputPath } = require('../config/vars');

exports.parseVideo = (fileName, filePath, cb) => {
  console.log(`autosub -o ${subOutputPath}/${fileName}.srt -F srt  ${filePath}`)
  exec(`autosub -o ${subOutputPath}/${fileName}.srt -F srt  ${filePath}`, (err, stdout, stderror) => {
    if (err) {
      console.log(stderror)
      return cb(true);
    }
    
    cb(null, `${subOutputPath}/${fileName}.srt`);
  });
}
