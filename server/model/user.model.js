import mongoose from 'mongoose';

// new instance of schema object
export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide the username'],
        unique: [true, 'Username exists'],
    },
    password:{
        type: String,
        required: [true, 'Please provide the password'],
    },
    fname: {
        type: String,
    },
    lname: {
        type: String
    },
    contact: {
        type: String,
        // required: [true, 'provide the contact number'],
        // unique: [true, 'Mobile number exists']
    },
    email: {
        type: String,
        required: [true, 'provide email id'],
        unique: [true, 'email already exists']
    },
    profile: {
        type: String
    }
})

export default mongoose.model.Users || mongoose.model('User', UserSchema) // ('modelname', SchemaName)