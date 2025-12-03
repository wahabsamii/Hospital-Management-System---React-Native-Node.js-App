// routes/pharmacyRoutes.js
import express from 'express';
import { addPharmacyItem, deletePharmacyItem, getAllPharmacyItems, getPharmacyItemById, updatePharmacyItem } from '../controllers/pharmacyController.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

router.post('/add',upload.single("image"), addPharmacyItem);
router.get('/all', getAllPharmacyItems);
router.get('/pharmacy/:id', getPharmacyItemById);
router.put('/pharmacy/:id', updatePharmacyItem);
router.delete('/pharmacy/:id', deletePharmacyItem);

export default router;
