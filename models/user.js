// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  duration: { type: Number, required: true }, // Assuming duration is in seconds
});

const User = mongoose.model('User', userSchema);

module.exports = User;
