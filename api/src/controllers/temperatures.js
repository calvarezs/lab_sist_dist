import { Router } from 'express';
import Temperatures from '../schemas/temperature.js';
import sharp from 'sharp';
import { dayRangeTimestamp } from '../helpers/timestamp.js'
const router = Router();
sharp.cache(false);

router.get('/getTemperatures', async (req, res) => {
  const dayRanges = dayRangeTimestamp("temperatures")
  const temperatures = await Temperatures.find({ timestamp: { $gte: dayRanges[1], $lt: dayRanges[0] } });
  return res.json(temperatures);
});

export default router;
