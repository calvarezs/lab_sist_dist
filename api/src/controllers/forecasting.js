import { Router } from 'express';
import Prediction from '../schemas/prediction.js';
import sharp from 'sharp';
import { dayRangeTimestamp } from '../helpers/timestamp.js'
const router = Router();
sharp.cache(false);

router.get('/getForecasting', async (req, res) => {
  const dayRanges = dayRangeTimestamp("predictions")
  const temperatures = await Prediction.find({ timestamp: { $gte: dayRanges[1], $lt: dayRanges[0] } });
  return res.json(temperatures);
});

export default router;
