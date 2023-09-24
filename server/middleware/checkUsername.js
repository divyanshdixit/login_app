import userModel from "../model/user.model.js";

export const checkUserNameExists = async (res, username) => {

    try{
        const user = await userModel.findOne({ username });
        return user;
    }catch(err){
        console.log(err);
        return res.status(500).send({error: 'not able to check username '})
    }
}

export const checkEmailExists = async (res, email) => {

    try{
        const user = await userModel.findOne({ email });
        return user;
    }catch(err){
        console.log(err);
        res.status(500).send({error: 'not able to check email '})
    }
}