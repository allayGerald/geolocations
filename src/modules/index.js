import regionRoutes from './region/region.routes.js';
import Region from '../modules/region/region.model.js';

export default app => {

  app.use('/api/regions', regionRoutes);

  app.get('/delete-timestamps', async (req, res) => {
    const response = await Region.collection.update({},
        {$unset: {createdAt: true, updatedAt: true}},
        {multi: true, safe: true}
    );

    res.json(response)
  });

  app.use('*', (req, res) => {
    return res.status(404).json({status: false, message: 'Resource Not found'});
  });
}

