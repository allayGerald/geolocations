import express from 'express';
import * as regionController from './region.controller.js';
import {isValidObjectId} from '../../middlewares/objectIdValidator.middleware.js';

const router = express.Router();

/**
 * @api {get} /regions Fetch all regions
 * @apiGroup Regions
 * @apiName GetRegions
 * @apiParam (string) [limit] Limit of documents returned default = 50
 * @apiParam (string) [page] Current page default = 1
 * @apiParam (string) [search] Search term if any
 * @apiExample {curl} Example usage:
 *     curl -i localhost:3000/api/regions?limit=2&&page=1&&search=
 *
 * @apiSuccessExample {json} Success-Response: [
 * {
 *   "name": "Arusha"
 *  },
 *  {
 *    "name": "Dar Es Salaam"
 *  }
 * ]
 *}
 */
router.get('/', regionController.getRegions);

router.get('/districts', regionController.getRegionsWithDistricts);

router.get('/:id/districts', [isValidObjectId], regionController.getRegionsDistricts);

export default router;