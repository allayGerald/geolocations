import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RegionSchema = new Schema({
      name: {
        type: String,
        required: true,
        trim: true
      }
    },
    {timestamps: true}
);

export default mongoose.model('Region', RegionSchema);