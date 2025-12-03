import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
   name: {type: String, required:true},
   doctorId:{type: mongoose.Schema.ObjectId, ref:'Doctor'},
   date:{type:Number, required:true},
   time:{type:String, required:true},
   user:{type:mongoose.Schema.ObjectId, ref:"User"}
})

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;