import { toast } from "react-hot-toast";

export const validateRegisterForm = async (values) => {
    const errors = verifyFirstName({}, values);
    verifyLastName(errors, values);
    verifyEmail(errors, values);
    verifyContact(errors, values);
    return errors;
}

const verifyFirstName = (error={}, values) => {
    if(!values.fname){
        error.fname = toast.error('First name is required!')
    }else if(values.fname.includes(" ") ){
        error.fname = toast.error('Invalid name!')
    }
    return error;
}

const verifyLastName = (error={}, values) => {
    if(!values.lname){
        error.lname = toast.error('Last name is required!')
    }else if(values.lname.includes(" ") ){
        error.lname = toast.error('Invalid name!')
    }
    return error;
}

const verifyEmail = (error={}, values) => {
    const pattern = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if(!values.email){
        error.email = toast.error('Email is required!')
    }else if(!pattern.test(values.email)){
        error.email = toast.error('Invalid Email!');
    }
    return error;
}

const verifyContact = (error={}, values) => {
    const pattern = /^\(?[1-9]{1}\d{2}\)?[- ]?(\d{3})[- ]?(\d{4})$/
    if(!values.contact){
        error.contact = toast.error('Number is required!');
    }else if(!pattern.test(values.contact)){
        error.contact = toast.error('Number is invalid!')
    }

    return error;
}

export const verifyUplaodedFile = (error={}, values) => {
    if(!values.file){
        error.file = toast.error('File is required!');
    }
    // else if(file.type.split('/')[0] !== 'image'){
    //     error.file = toast.error('File format is invalid, Upload only image file!');
    // }
    return error;
}

export const verifyFileFormat = (error={}, file) => {
    if(file.type.split('/')[0] !== 'image'){
        error.file = toast.error('File format is invalid, Upload only image file!');
    }
    return error;
}