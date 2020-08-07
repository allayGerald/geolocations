import express from 'express';
import * as regionController from './region.controller.js'

const router = express.Router();

router.get('/', regionController.getRegions);

export default router;