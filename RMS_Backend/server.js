import express from 'express';
import dbConnect from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js'
import pharmacyRoutes from './routes/pharmacyRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import connectCloudinary from './config/cloudinary.js';
const app = express();

const port = 9000;
app.get('/', function(req,res){
    res.send('Server is RMS Run')
});

dbConnect();
connectCloudinary();
app.use(express.json())
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/pharmacy', pharmacyRoutes);
app.use('/api/booking', bookingRoutes);
// app.listen(port, () => console.log(`server is run on port ${port}`)) 
export default app;