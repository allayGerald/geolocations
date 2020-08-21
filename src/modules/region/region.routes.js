import express from 'express';
import * as regionController from './region.controller.js';
import {isValidObjectId} from '../../middlewares/objectIdValidator.middleware.js';

const router = express.Router();

/**
 * @api {get} /regions Fetch all regions
 * @apiGroup Regions
 * @apiName GetRegions
 * @apiParam (string) [search] Search term if any
 * @apiExample {curl} Example usage:
 *     curl -i localhost:3000/api/regions?search=
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 * {
 *   "name": "Arusha",
 *   "_id": "5f3f8cf71358fd4604d4e49b"
 *  },
 *  {
 *    "name": "Dar Es Salaam",
 *   "_id": "5f3f8cf71358fd4604d4e49a"
 *  }
 *}
 */
router.get('/', regionController.getRegions);

/**
 * @api {get} /regions/districts Fetch regions with districts
 * @apiGroup Regions
 * @apiName GetRegionsDistricts
 * @apiParam (string) [search] Search term if any
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *   "name": "Arusha",
 *   "_id": "5f3f8cf71358fd4604d4e49b",
 *      "districts": [
 *          "Arusha",
 *          "Arumeru",
 *          "Monduli",
 *          "Karatu",
 *          "Longido",
 *          "Ngorongoro"
 *      ]
 *  },
 *  {
 *    "name": "Dar Es Salaam",
 *   "_id": "5f3f8cf71358fd4604d4e49a",
 *      "districts": [
 *          "Ilala",
 *          "Kinondoni",
 *          "Temeke",
 *          "Ubungo",
 *          "Kigamboni"
 *      ]
 *  }
 * ]
 *}
 */
router.get('/districts', regionController.getRegionsWithDistricts);

/**
 * @api {get} /regions/districts Fetch region districts
 * @apiGroup Regions
 * @apiName GetRegionDistricts
 * @apiParam (string) id The region ID
 * @apiParam (string) [search] Search term if any
 *
 * @apiSuccessExample {json} Success-Response:
 *  ["Babati",
 *  "Mbulu",
 *  "Hanang",
 *  "Kiteto",
 *  "Simanjiro"
 *  ]
 */
router.get('/:id/districts', [isValidObjectId], regionController.getRegionsDistricts);

export default router;