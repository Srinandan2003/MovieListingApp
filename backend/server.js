import app from "./app.js"

import { configDotenv } from "dotenv"
import connectDB from "./src/config/db.config.js"
configDotenv()

const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB()
})