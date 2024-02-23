var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const cordinatesRouter = require('./routes/cordinatesRoutes')
const sessionRouter = require('./routes/sessionRoutes')
const userRouter  = require('./routes/userRoutes')

const Cordinates = require('./models/cordinates')
const Session = require('./models/session')
const User = require('./models/user')




const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://zdes:zdeslav@cluster0.d0hxdga.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
// const coordinatesData = [
//     { characterName: 'Black Goat', xCoordinate: 749, yCoordinate: 932 },
//     { characterName: 'Homer', xCoordinate: 1532, yCoordinate: 3482 },
//     { characterName: 'DeathNote', xCoordinate: 336, yCoordinate: 3740 }
// ];

// // Iterate over the array and save each set of coordinates
// coordinatesData.forEach(async (data) => {
//     try {
//         const newCoordinates = new Cordinates(data);
//         const savedCoordinates = await newCoordinates.save();
//         console.log('Coordinates saved successfully:', savedCoordinates);
//     } catch (error) {
//         console.error('Error saving coordinates:', error);
//     }
// });





var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/', cordinatesRouter)
app.use('/api/', sessionRouter)
app.use('/api', userRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send error response as JSON
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
