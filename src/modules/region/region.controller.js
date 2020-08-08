import Region from './region.model.js';

export const getRegions = async (req, res) => {
  try {
    const {page = 1, limit = process.env.PERPAGE, search = ''} = req.query;
    const customLabels = {
      totalDocs: 'total',
      docs: 'regions',
      nextPage: 'next',
      prevPage: 'prev',
      totalPages: 'pageCount'
    };
    let query = {};

    if (search !== '') {
      query = {'name': {'$regex': search, '$options': 'i'}}
    }

    const regions = await Region.paginate(query, {
      page,
      limit,
      customLabels,
      sort: {name: 1},
      select: '-_id name'
    });

    res.status(200).json(regions);

  } catch (e) {
    return res.status(500).json({
      status: false, message: e.message
    });
  }
};