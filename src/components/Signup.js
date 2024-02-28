import * as React from 'react';
import "../App.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import auth from '../assets/auth.png';
import { Link } from "react-router-dom";
import {themeColor}from "../config/index"

export default function Signup() {
  return (
    <>
    <div className='signup-flex'>
    <div className='left-corner-signup'>
        <div className='center-div'>
            <div className='text-field-adjust'>
            <h1 style={{color:themeColor}}>Sign Up!</h1>
            </div>
            <div>
            <TextField className='text-field-adjust' id="standard-basic" label="Full Name" variant="standard" />
            </div>
            <div>
            <TextField className='text-field-adjust' id="standard-basic" label="Email Address" variant="standard" />
            </div>
            <div>
            <TextField className='text-field-adjust' id="standard-basic" label="Password" variant="standard" />
            </div>
            <div>
            <TextField className='text-field-adjust' id="standard-basic" label="Confirm Password" variant="standard" />
            </div>
            <div>
            <Button className='text-field-adjust form-btn' variant="contained">Sign Up</Button>
            </div>
            <div>
              <span>Already have Account? </span><span><Link to="/login" style={{color:themeColor}}>Log In</Link></span>
            </div>
        </div>
    </div>
    <div className='right-corner-signup'>
       
        <img src={auth} className='auth-img'/>
        
    </div>
    </div>
    </>
  )
}
