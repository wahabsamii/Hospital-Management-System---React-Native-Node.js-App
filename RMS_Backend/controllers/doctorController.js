import Doctor from '../models/Doctor.js';
import { v2 as cloudinary } from 'cloudinary';
// Create a new doctor
export const createDoctor = async (req, res) => {
    const {name,specialty,address,description} = req.body;
    const image = req.file;
  try {
    const UploadImage = await cloudinary.uploader.upload(image.path, {resource_type:'image'});
    const ImageUrl = UploadImage.secure_url
    const newDoctor = new Doctor({
        name,
        specialty,
        address,
        description,
        image: ImageUrl
    });
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update doctor
export const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDoctor) return res.status(404).json({ error: 'Doctor not found' });
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    const deleted = await Doctor.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Doctor not found' });
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
