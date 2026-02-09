import express from "express"
import cookieParser from "cookie-parser";
import {ENV} from './lib/env.js'
import path from "path"
import { fileURLToPath } from "url";
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from "./lib/db.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = ENV.PORT || 3000;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

if(ENV.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../../frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../../frontend","dist","index.html"))
    })
}

app.listen(PORT,() => {
    console.log("Server is running on Port 3000")
    connectDB()
})
