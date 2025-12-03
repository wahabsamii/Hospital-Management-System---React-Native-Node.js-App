// models/Pharmacy.js
import mongoose from 'mongoose';

const pharmacySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Cloudinary URL or local path
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);
export default Pharmacy;