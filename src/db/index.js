import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose'

import { DB_NAME } from '../constants.js'

const connectDB= async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`);//used to know on which host u r connected
    } catch (error) {
        console.log("MongoDB ConnectionError:",error)
        process.exit(1)
    }
} 

export default connectDB;