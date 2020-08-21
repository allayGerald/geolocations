import regions from '../dbSeeds/data/regions_districts.data.js';
import Region from '../modules/region/region.model.js';

export default async () => {
  try {
    for (const region of regions) {

      if (!region) {
        break;
      }

      let regionId = await Region.findOne({name: region.name}).select('_id');

      if (regionId) {
        await Region.findByIdAndUpdate(regionId._id, {districts: region.districts});
      } else {
        const newRegion = await Region.create(region);
        regionId = newRegion._id;
      }
    }
  } catch (e) {
    console.log(e);
  }
}
