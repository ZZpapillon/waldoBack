const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cordinatesSchema = new Schema({
    characterName: { type: String },
    xCoordinate: { type: Number, required: true },
    yCoordinate: { type: Number, required: true }
});




const Cordinates = mongoose.model('Cordinates', cordinatesSchema);

module.exports = Cordinates;
