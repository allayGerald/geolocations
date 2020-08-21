import mongoose from 'mongoose';

export const isValidObjectId = (req, res, next) => {
  const userId = req.params.id;

  if (!mongoose.isValidObjectId(userId)) {
    return res.status(404).json({
      status: false, message: 'Resource not found!'
    });
  }

  next();
};