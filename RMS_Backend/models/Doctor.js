import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String, // Store image path or URL
  },
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor