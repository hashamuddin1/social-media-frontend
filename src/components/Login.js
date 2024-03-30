import * as React from 'react';
import "../App.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import auth from '../assets/auth.png';
import { Link } from "react-router-dom";
import {themeColor}from "../config/index"

export default function Login() {
  return (
    <>
    <div className='signup-flex'>
    <div className='left-corner-signup'>
        <div className='center-div'>
            <div className='text-field-adjust'>
            <h1 style={{color:themeColor}}>Login!</h1>
            </div>
            <div>
            <TextField className='text-field-adjust' id="standard-basic" label="Email Address" variant="standard" />
            </div>
            <div>
            <TextField className='text-field-adjust' id="standard-basic" label="Password" variant="standard" />
            </div>
            <div>
            <Button className='text-field-adjust form-btn' variant="contained">Log In</Button>
            </div>
            <div>
              <span>Do not have an Account? </span><span><Link to="/"  style={{color:themeColor}}>Sign Up</Link></span>
            </div>
        </div>
    </div>
    <div className='right-corner-signup'>
       
        <img src={auth} className='auth-img' alt='intro'/>
        
    </div>
    </div>
    </>
  )
}
