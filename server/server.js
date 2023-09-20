import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDatabase from './database/db.js';
import router from './routes/index.js';

// creating configuration for the env file
dotenv.config();

const app = express(); 

// use middlewares:

app.use(express.json())
app.use(cors()) 
app.use(morgan());
// point to be searched
app.disable('x-powered-by') // less hackers know about our stack

const port = process.env.PORT;

// HTTP get request
app.get('/', (req, res)=> {
    res.status(201).json('home page')
})

// for the api routes:
app.use('/api', router);

// start http server 
connectDatabase
.then(() => {
    try{
        app.listen(port, ()=> {
            console.log(`Server is running on port ${port}, http://localhost:${port}`)
        })
    }catch(err){
        console.log('Can not connected to server!')
    }
})
.catch(err => {
    console.log(`Invalid connection ${err}`)
})

/*
http.createServer(app).listen(port)
*/