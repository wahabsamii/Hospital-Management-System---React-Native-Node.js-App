import mongoose from "mongoose";

const dbConnect = async() => {
    try {
        const DB_STRING = 'mongodb+srv://aftabkhan48491:aftabkhan945@cluster0.qdqvxeg.mongodb.net/RMS_HEALTH?retryWrites=true&w=majority&appName=Cluster0'
        const database = mongoose.connect(DB_STRING);
        if (database) {
            console.log('Database is connected')
        }
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;