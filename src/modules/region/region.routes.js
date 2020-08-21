import express from 'express';
import * as regionController from './region.controller.js';
import {isValidObjectId} from '../../middlewares/objectIdValidator.middleware.js';

const router = express.Router();

/**
 * @api {get} /regions?search= Fetch all regions
 * @apiVersion 1.0.0
 * @apiGroup Regions
 * @apiName GetRegions
 * @apiParam (string) [search] Search term
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 * {
 *   "name": "Arusha",
 *   "_id": "5f3f8cf71358fd4604d4e49b"
 *  },
 *  {
 *    "name": "Dar Es Salaam",
 *   "_id": "5f3f8cf71358fd4604d4e49a"
 *  }
 *]
 */
router.get('/', regionController.getRegions);

/**
 * @api {get} /regions/districts?search= Fetch regions with districts
 * @apiVersion 1.0.0
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
 */
router.get('/districts', regionController.getRegionsWithDistricts);

/**
 * @api {get} /regions/:id/districts Fetch region districts
 * @apiVersion 1.0.0
 * @apiGroup Regions
 * @apiName GetRegionDistricts
 * @apiParam (string) id The region ID
 *
 * @apiSuccessExample {json} Success-Response:
 *  ["Babati",
 *  "Mbulu",
 *  "Hanang",
 *  "Kiteto",
 *  "Simanjiro"
 *  ]
 */
router.get('/:id/districts', [isValidObjectId], regionController.getRegionDistricts);

export default router;