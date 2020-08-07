import Region from './region.model.js';

export const getRegions = async (req, res) => {
  try {
    const {page = 1, limit = process.env.PERPAGE, perPage = process.env.PERPAGE, search = ''} = req.query;

    const total = await Region.countDocuments();

    const regions = await Region.find()
                                .sort({name: 1})
                                .skip((page - 1) * limit)
                                .limit(+limit);

    res.status(200).json({
      regions,
      total,
      limit: +limit
    });
  } catch (e) {
    return res.status(500).json({
      status: false, message: e.message
    });
  }
};