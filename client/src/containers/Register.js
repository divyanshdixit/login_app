import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpeg';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { validateRegisterForm } from '../utils/validate';
import { ConvertImageToBase64 } from '../utils/convert';

const Register = () => {
    const [file, setFile] = useState();
    const formik = useFormik({
        initialValues: {
          fname: '',
          lname: '',
          email: '',
          contact: '',
        },
        validate: validateRegisterForm, 
        // validate the form data only when user click on the submi button  
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, {profile: file || ''})
            console.log(values);
        }
      });

    const handleFileUpload = async (e) => {
        ConvertImageToBase64(e.target.files[0])
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            setFile(err);
        })
    }
    
    return (
        <div className='container'>
            <Toaster position='right' reverseOrder={false}></Toaster>
            <h1> Register Form </h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='user_img'>
                    <img src={avatar} width={80} height={80} />
                </div>
                <div className='fname'>
                    <label>First Name : </label>
                    <input type='text' placeholder='First name' value={formik.values.fname} onChange={formik.handleChange} name='fname' />
                </div>

                <div className='lname'>
                    <label>Last Name: </label>
                    <input type='text' placeholder='Last name' value={formik.values.lname} onChange={formik.handleChange} name='lname' />
                </div>

                <div className='email'>
                    <label>Email: </label>
                    <input type='text' placeholder='Email ID' value={formik.values.email} onChange={formik.handleChange} name='email' />
                </div>
                
                <div className='contact'>
                    <label>Contact No: </label>
                    <input type='tel' placeholder='Contact Number' value={formik.values.contact} onChange={formik.handleChange} name='contact' />
                </div>

                <div className='file'>
                    <label htmlFor='profile'>
                       <img src={file || avatar} width={50} height={50} />
                    </label>
                    <input type='file' id='profile' onChange={handleFileUpload} className='d-none' name='profile'/>
                </div>

                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}

export default Register;