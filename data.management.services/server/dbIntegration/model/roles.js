import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const rolesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  campId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Camp',
  },
  role: {
    type: String,
    values: ['Admin', 'User', 'Hr'],
    default: 'User',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

rolesSchema.plugin(mongoosePaginate);

const Roles = mongoose.model('Role', rolesSchema);

export default Roles;
