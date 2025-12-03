import express from 'express';
import { bookAppointment, getAllBooking, userBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/book', bookAppointment);
router.get('/get', getAllBooking);
router.get('/:id', userBookings);

export default router