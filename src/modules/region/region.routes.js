import express from 'express';
import * as regionController from './region.controller.js';

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
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "regions": [
 *       {
 *           "name": "Arusha"
 *       },
 *       {
 *           "name": "Dar Es Salaam"
 *       }
 *   ],
 *   "total": 33,
 *   "limit": 2,
 *   "pageCount": 17,
 *   "page": 1,
 *   "pagingCounter": 1,
 *   "hasPrevPage": false,
 *   "hasNextPage": true,
 *   "prev": null,
 *   "next": 2
 *}
 */
router.get('/', regionController.getRegions);

export default router;