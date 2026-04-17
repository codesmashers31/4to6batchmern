import express from 'express'
import {  adding_Data } from '../controllers/authController.js'




const routes = express.Router()


routes.post("/newadding",adding_Data)



export default routes




// http://localhost:5000/api/auth/newadding