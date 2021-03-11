//index.js
//Import Express
import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { produce } from './src/producer.js'
import { consume } from './src/consumer.js'
import schedule from 'node-schedule'

//Start App
let app = express();
//Assign port
var port = process.env.PORT || 3001;
// Welcome message
app.use(cors());
app.use(bodyParser.json());

// Initialize mongo
mongoose.Promise = global.Promise;
const dbPath = 'mongodb://mongo:27017/kafka';
mongoose.connect(dbPath);
 
//Productor
//setInterval(function(){  produce(); }, 1200000); //cada 20 min
// Consumidor
//setInterval(function(){  consume() }, 1800000); //cada 30 min

//Productor
setInterval(function(){  produce(); }, 120000); //cada 2 min
// Consumidor
setInterval(function(){  consume() }, 180000); //cada 3 min

app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function () {
  console.log("Running FirstRest on Port " + port);
})