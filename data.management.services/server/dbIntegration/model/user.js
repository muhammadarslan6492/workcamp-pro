import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      default: '',
    },
    phoneNumber: {
      type: String,
      default: '',
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      default: '',
    },
    verified: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre('find', function () {
  this.where({ isDeleted: false });
});

UserSchema.pre('findOne', function () {
  this.where({ isDeleted: false });
});

UserSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema);

export default User;
