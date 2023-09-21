import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';



dotenv.config();

// here in this file we write the logic of controllers

/**
 * POST: http://localhost:8080/api/register
 * @param :{
 * "username":"",
 * "firstname":"",
 * "lastname":"",
 * "password":""
 * }
 */

export async function register(req, res) {
  try {
    const { username, email, password, profile } = req.body;
    // first we have to check for username and email duplicacy
    const checkUserName = await userModel.findOne({ username });
    const checkEmail = await userModel.findOne({ email });

    if (checkEmail == null && checkUserName == null) {
      // if is null (means user is new)
      if (password) {
        const hash = await bcrypt.hash(password, 10);
        console.log(hash);
        if (!hash)
          res.status(500).send({ error: "not able to convert in hash" });
        const user = new userModel({
          username,
          email,
          password: hash,
          profile: profile || "",
        });

        // save the user:
        const newUser = await user.save();
        if (newUser) {
          res
            .status(201)
            .send({ message: "User created successfully!", user: newUser });
        } else {
          res.status(500).send({ error: "Something went wrong!" });
        }
      }
    } else {
      if (checkEmail) res.send("Email alreay exists");
      if (checkUserName) res.send("Username alreay exists");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(new Error(err));
  }
}

/**
 * POST: http://localhost:8080/api/login
 * @param :{
 * "username":"",
 * "password":""
 * }
 */

export async function login(req, res) {
    try{
        const {username, password} = req.body;
        // check if username exist or not
        const user = await userModel.findOne({username});

        if(!user){
            res.status(404).send({error: 'User not found!'})
        }else{
            const checkPassword = await bcrypt.compare(password, user.password);
            if(checkPassword){
                // create the jwt token
                const token = jwt.sign({
                    userid: user._id,
                    username: user.username,
                }, process.env.SECRET, {expiresIn: '24h'});

                res.status(200).send({
                    message: 'Login successful...',
                    username: user.username,
                    token
                })
            }else{
                res.status(400).send({error: 'Password do not match!'});
            }
        }
        
        
    }catch(err){
        console.log(err);
        res.status(500).send({error: 'Something went wrong in login'});
    }
}

/**
 * GET: http://localhost:8080/api/user/username
 * @param :{}
 */

export async function user(req, res) {
  try{
    const {username} = req.params;
    if(!username){
        res.send({error: 'Invalid username'})
    }
    const user = await userModel.findOne({username});
    if(user){
        // this user object has password field also , but we don't want to show the password 
        // convert user object to json then assign the returned json to object and send that object

        const {password, ...rest} = Object.assign({}, user.toJSON());
        res.status(200).send(rest);
    }else{
        res.status(401).send({error: 'Can not find the user'})
    }
  }catch(err){
    res.status(500).send({error: `interal server error ${err}`})
  }
}

/**
 * PUT: http://localhost:8080/api/edituser
 * @param :{
 * username:""
 * }
 */

export async function editUser(req, res) {
  res.json("edit user route!");
}
