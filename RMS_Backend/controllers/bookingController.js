import Booking from "../models/Booking.js";


export const bookAppointment = async(req,res) => {
    // console.log( req.body);
    
    const {name, doctorId, date, time, user} = req.body;
    try {
        const newBooking = new Booking({
            name,
            doctorId, 
            date,
            time,
            user
        });
        await newBooking.save();
        return res.json({success:true, message:"Appointment Booked"})
    } catch (error) {
        console.log(error)
    }
}

//all bookings
export const getAllBooking = async (req,res) => {
    try {
        const allbooking = await Booking.find();
        return res.json({success:true, booking, allbooking})
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

//user bookign

export const userBookings = async (req,res) => {
    const {id} = req.params;
    try {
        const allbooking = await Booking.find({user:id}).populate('doctorId');
        return res.json({success: true, booking: allbooking})
    } catch (error) {
        return res.json({success:false, message: error.message})
    }
}