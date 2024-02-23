// controllers/userController.js

const User = require('../models/user');

exports.saveUsernameAndDuration = async (req, res, next) => {
  try {
    const { username, duration } = req.body;

    // Save username and duration to the database
    const user = new User({ username, duration });
    await user.save();

    res.status(201).json({ message: 'Username and duration saved successfully.' });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsernamesAndDurations = async (req, res, next) => {
  try {
    // Retrieve all usernames and durations from the database
    const users = await User.find({}, 'username duration');
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
