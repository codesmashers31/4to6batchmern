import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import connectDb from './config/db.js'

dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoute)

const PORT = process.env.PORT

connectDb()

app.listen(PORT,()=>{
    console.log(`Server Connected  http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/auth