const express = require('express');
const controller = require('../../controllers/video.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');

// Multer config
const multer = require('multer');
const { diskStorage } = require('../../../config/multer');
const upload = multer({
  storage: diskStorage
});

// Init Router
const router = express.Router();

router
  .route('/')
  .post(authorize(), upload.single('video'), controller.uploadVideo);



module.exports = router;
