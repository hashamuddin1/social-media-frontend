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
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../config/index'
import axios from 'axios'

export default function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastName = (event) => {
    setLastName(event.target.value)
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

  const submitSignup = async () => {
    console.log({
      firstName,
      lastName,
      emailAddress,
      password,
      confirmPassword,
    })
    try {
      const response = await axios.post(`${baseUrl}/api/userSignUp`, {
        first_name: firstName,
        last_name: lastName,
        email: emailAddress,
        password,
      })
      console.log(response)
      if (response.data.success === true) {
        toast.success('Sign Up Successfully!')
        setTimeout(() => {
          navigate('/')
        }, 3000)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Grid container>
        <Grid item xs={12} md={6} lg={6} className="left-corner-signup">
          <div className="center-div">
            <div className="text-field-adjust">
              <h1 style={{ color: themeColor }}>Sign Up!</h1>
            </div>
            <div>
              <TextField
                className="text-field-adjust"
                onChange={handleFirstName}
                value={firstName}
                id="standard-basic"
                label="First Name"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                className="text-field-adjust"
                onChange={handleLastName}
                value={lastName}
                id="standard-basic"
                label="Last Name"
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
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          xs={0}
          display={{ xs: 'none', md: 'block' }}
          className="right-corner-signup"
        >
          <img src={auth} className="auth-img" alt="intro" />
        </Grid>
      </Grid>
    </>
  )
}
