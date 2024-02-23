

const express = require('express');
const router = express.Router();
const { saveUsernameAndDuration, getAllUsernamesAndDurations } = require('../controllers/userController');

router.post('/save-username-duration', saveUsernameAndDuration);
router.get('/all-usernames-durations', getAllUsernamesAndDurations);

module.exports = router;
