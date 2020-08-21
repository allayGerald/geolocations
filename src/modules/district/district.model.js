import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const DistrictSchema = new Schema({
      name: {
        type: String,
        required: true,
        trim: true
      },
      region: {
        type: Schema.Types.ObjectId,
        default: null,
        ref: 'Role'
      }
    }
);

// DistrictSchema.plugin(mongoosePaginate);

export default mongoose.model('District', DistrictSchema);