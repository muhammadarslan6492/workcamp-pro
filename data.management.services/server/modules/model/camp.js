import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// create org schema
const CampSchema = new mongoose.Schema(
  {
    campName: {
      type: String,
    },
    slug: {
      type: String,
    },
    orgName: {
      type: String,
    },
    teamStrength: String,

    email: {
      type: String,
      default: '',
    },
    websiteLink: {
      type: String,
    },
  },
  { timestamps: true }
);

CampSchema.plugin(mongoosePaginate);

const Camp = mongoose.model('Camp', CampSchema);

export default Camp;
