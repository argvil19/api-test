const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const videoRoutes = require('./videos.route.js');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/videos', videoRoutes);

module.exports = router;
