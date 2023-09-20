// create mongodb server

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connectDatabase(){
    const mongoserver = await MongoMemoryServer.create(); // return promise
    const geturi = mongoserver.getUri();
    const conn = await mongoose.connect(geturi); // return promise
    console.log('database connected!');
    return conn;
}

export default connectDatabase();