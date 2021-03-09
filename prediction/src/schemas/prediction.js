import mongoose from 'mongoose';

const PredictionSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  temp: {
    night: { 
      type: Number,
      required: true,
    },
    morning: { 
      type: Number,
      required: true,
    },
    afternoon: { 
      type: Number,
      required: true,
    },
    min: { 
      type: Number,
      required: true,
    },
    max: { 
      type: Number,
      required: true,
    },
  },
  timestamp: {
    type: String,
    required: true,
  },
})

mongoose.model('Prediction', PredictionSchema, 'Prediction');

export default mongoose.model('Prediction');