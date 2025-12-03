// controllers/pharmacyController.js
import Pharmacy from '../models/Pharmacy.js';
import {v2 as cloudinary} from 'cloudinary';
// Add new pharmacy item
export const addPharmacyItem = async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;
    console.log("kk",req.body)
    const image = req.file;
    const UploadImage = await cloudinary.uploader.upload(image.path, {resource_type:'image'});
    const ImageUrl = UploadImage.secure_url;
    const item = new Pharmacy({ name, image: ImageUrl, description, price, quantity });
    await item.save();

    res.status(201).json({ success: true, item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all pharmacy items
export const getAllPharmacyItems = async (req, res) => {
  try {
    const items = await Pharmacy.find();
    res.json({ success: true, items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get single pharmacy item
export const getPharmacyItemById = async (req, res) => {
  try {
    const item = await Pharmacy.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Not found' });

    res.json({ success: true, item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update pharmacy item
export const updatePharmacyItem = async (req, res) => {
  try {
    const item = await Pharmacy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ success: false, message: 'Not found' });

    res.json({ success: true, item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete pharmacy item
export const deletePharmacyItem = async (req, res) => {
  try {
    const item = await Pharmacy.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Not found' });

    res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
