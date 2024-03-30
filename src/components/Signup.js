import React, { useState } from 'react'
import '../App.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import auth from '../assets/auth.png'
import { Link } from 'react-router-dom'
import { themeColor } from '../config/index'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'

export default function Signup() {
  const [fullName, setFullName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleFullName = (event) => {
    setFullName(event.target.value)
  }

  const handleEmailAddress = (event) => {
    setEmailAddress(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  const submitSignup = () => {
   
    console.log({
      fullName,
      emailAddress,
      password,
      confirmPassword,
    })
    toast.success('Sign Up Successfully!')
  }

  return (
    <>
      <div className="signup-flex">
      <Toaster position="top-right" reverseOrder={false} />
        <div className="left-corner-signup">
          <div className="center-div">
            
            <div className="text-field-adjust">
              <h1 style={{ color: themeColor }}>Sign Up!</h1>
            </div>
            <div>
              <TextField
                className="text-field-adjust"
                onChange={handleFullName}
                value={fullName}
                id="standard-basic"
                label="Full Name"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                className="text-field-adjust"
                onChange={handleEmailAddress}
                value={emailAddress}
                id="standard-basic"
                label="Email Address"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                className="text-field-adjust"
                onChange={handlePassword}
                type={showPassword ? 'text' : 'password'}
                value={password}
                id="standard-basic"
                label="Password"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                className="text-field-adjust"
                onChange={handleConfirmPassword}
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                id="standard-basic"
                label="Confirm Password"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <Button
                className="text-field-adjust form-btn"
                variant="contained"
                onClick={submitSignup}
              >
                Sign Up
              </Button>
            </div>
            <div>
              <span>Already have Account? </span>
              <span>
                <Link to="/login" style={{ color: themeColor }}>
                  Log In
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="right-corner-signup">
          <img src={auth} className="auth-img" alt='intro' />
        </div>
      </div>
    </>
  )
}
