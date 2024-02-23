const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
   
    startTime: { type: Date, },
    endTime: { type: Date, },
  
});

const Session = mongoose.model('Session', sessionSchema);
console.log('Session Schema:', sessionSchema.obj);
module.exports = Session;


