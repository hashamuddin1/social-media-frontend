import * as React from 'react';
import "../App.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import auth from '../assets/auth.jpg';

export default function Signup() {
  return (
    <>
    <div className='signup-flex'>
    <div className='left-corner-signup'>
        <div className='center-div'>
            <div className='text-field-adjust'>
            <h1 style={{color:"#00296b"}}>Sign Up!</h1>
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
            <Button className='text-field-adjust form-btn' variant="contained">Sign Up!</Button>
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
