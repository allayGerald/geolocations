import seedRegions from './regionSeeder.js';

export default async () => {
  try {
    const regions = await seedRegions();
  } catch (e) {
    console.log(e);
  }
}