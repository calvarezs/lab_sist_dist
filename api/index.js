//index.js
//Import Express
import express from 'express'
import routes from './src/controllers/index.js'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//Start App
let app = express();
//Assign port
var port = process.env.PORT || 3000;
// Welcome message
app.use(cors());
app.use(bodyParser.json());
app.use(routes);


// Initialize mongo
mongoose.Promise = global.Promise;
const dbPath = 'mongodb://mongo1:27017/kafka';
mongoose.connect(dbPath);

app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function () {
  console.log("Running FirstRest on Port " + port);
})