import dotenv from 'dotenv';

import connectDB from './db/index.js';

//import mongoose from 'mongoose'

//import { DB_NAME } from './constants'
dotenv.config()


connectDB()

















// 1st Approach


// import express from 'express';

// const app = express();

// ( async ()=>{}) 
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("Err",(error)=>{
//             console.log("Error", error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`The app is listening on ${process.env.PORT}`)
//         })
    
// } catch (error) {
//     console.log("Error")
//     throw error
    
    
// }