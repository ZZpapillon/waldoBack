const express = require('express');
const router = express.Router();
const { startSession, endSession} = require('../controllers/sessionController');



router.post('/start', startSession)
// router.post('/save-score', savedScore)
router.put('/end/:sessionId', endSession)


module.exports = router;