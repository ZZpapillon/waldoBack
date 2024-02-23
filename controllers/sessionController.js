const Session = require('../models/session');

// Function to start a new session
// Function to start a new session
exports.startSession = async (req, res, next) => {
    try {
        const { startTime} = req.body;
        // Use the sessionId as needed in your backend logic
        const session = new Session({ startTime });
        const savedSession = await session.save();
        res.status(201).json(savedSession);
    } catch (error) {
        next(error);
    }
};

// Function to update the session with endTime (when the game ends)
exports.endSession = async (req, res, next) => {
  try {
    const { endTime } = req.body;
    const { sessionId } = req.params;

    // Validate required fields
    if (!endTime) {
      return res.status(400).json({ error: 'endTime is required' });
    }

    // Update the session document with the endTime
    const updatedSession = await Session.findByIdAndUpdate(sessionId, { endTime }, { new: true });

    // Respond with the updated session data
    res.json(updatedSession);
  } catch (error) {
    next(error);
  }
}

// exports.savedScore = async (req, res, next) => {
//      try {
//     const { username, endTime } = req.body;

//     // Create a new session document with the provided username and end time
//     const session = new Session({
//       username,
//       endTime: new Date(endTime), // Assuming endTime is provided as a date string or timestamp
//     });

//     // Save the session document to the database
//     await session.save();

//     // Respond with a success message
//     res.status(200).json({ message: 'Score saved successfully' });
//   } catch (error) {
//     // If an error occurs, respond with an error message
//     console.error('Error saving score:', error);
//     res.status(500).json({ error: 'Failed to save score' });
//   }
// }