import { Router } from 'express';
import temperaturesController from './temperatures.js';
import forecastingController from './forecasting.js';

const router = Router();


//Example
router.use('/temperatures', temperaturesController);
router.use('/forecasting', forecastingController);

export default router;
