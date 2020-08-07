import regions from '../dbSeeds/data/regions.data.js';
import Region from '../modules/region/region.model.js';

export default async () => {
  try {
    for (const region of regions) {
      if (!region) {
        break;
      }
      const count = await Region.countDocuments({name: region.name});

      if (count === 0) {
        const newRegion = await Region.create(region);
      }
    }
  }catch (e) {
    console.log(e)
  }
}