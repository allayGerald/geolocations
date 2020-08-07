import seedRegions from './regionSeeder.js';

export default async () => {
  const regions = await seedRegions();
}