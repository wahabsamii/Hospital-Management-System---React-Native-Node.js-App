import express from 'express';
import { createDoctor, deleteDoctor, getAllDoctors, getDoctorById, updateDoctor } from '../controllers/doctorController.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

router.post('/add',upload.single('image'), createDoctor);
router.get('/all', getAllDoctors);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

export default router;
