//index.js
//Import Express
import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { calculateTemperatures } from './src/predictions.js'
import schedule from 'node-schedule'

//Start App
let app = express();
//Assign port
var port = process.env.PORT || 3002;
// Welcome message
app.use(cors());
app.use(bodyParser.json());

// Initialize mongo
mongoose.Promise = global.Promise;
const dbPath = 'mongodb://mongo1:27017/kafka';
mongoose.connect(dbPath);

let predictionDays = 3

schedule.scheduleJob({ hour: 0, minute: 0, second: 0 }, function () {
  // Pseudo forecasting
  calculateTemperatures(predictionDays)
});

// schedule.scheduleJob({ hour: 12, minute: 39, second: 0 }, function () {
//   // Pseudo forecasting
//   calculateTemperatures(predictionDays)
// });


app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function () {
  console.log("Running FirstRest on Port " + port);
})