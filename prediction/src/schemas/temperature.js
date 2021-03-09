import mongoose from 'mongoose';

const TemperatureSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  temp: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
})

mongoose.model('Temperature', TemperatureSchema, 'Temperature');

export default mongoose.model('Temperature');