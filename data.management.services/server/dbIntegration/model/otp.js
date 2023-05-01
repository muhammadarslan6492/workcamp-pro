import mongoose from 'mongoose';

const otpSchema = mongoose.Schema({
  code: Number,
  expiry: Date,
  status: {
    type: String,
    value: ['CONSUMED', 'UNUSED', 'EXPIRED'],
    default: 'UNUSED',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  flag: {
    type: String,
    value: ['SIGNUP', 'RESET_PASSWORD', 'DASHBOARD_SIGNUP'],
    default: 'SIGNUP',
  },
  campId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camp',
  },
});

const OTP = mongoose.model('Otp', otpSchema);

export default OTP;
