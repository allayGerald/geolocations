import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const RegionSchema = new Schema({
      name: {
        type: String,
        required: true,
        trim: true
      },
      districts: {
        type: Array
      }
    }
);

export default mongoose.model('Region', RegionSchema);