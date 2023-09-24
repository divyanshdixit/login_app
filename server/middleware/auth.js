import { configDotenv } from "dotenv";
import jwt from 'jsonwebtoken';

export const AuthMiddleware = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const userDetail = jwt.verify(token, process.env.SECRET)
        console.log(userDetail);
        req.user = userDetail;
        next();
    }catch(err){
        console.log(err);
        res.status(500).send({error: 'Authentication failed!'});
    }
}

export const getLocalVariables = async (req, res, next) => {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = false;
    next();
}