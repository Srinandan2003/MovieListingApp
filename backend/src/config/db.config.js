import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(conn.connections[0].host);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB