import regionRoutes from './region/region.routes.js';

export default app => {

  app.use('/api/regions', regionRoutes);

  app.use('*', (req, res) => {
    return res.status(404).json({status: false, message: 'Resource Not found'});
  });
}

