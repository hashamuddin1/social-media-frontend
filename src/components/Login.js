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

export default function Login() {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleEmailAddress = (event) => {
    setEmailAddress(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const submitSignup = () => {
    console.log({
      emailAddress,
      password,
    })
    toast.success('Login Successfully!')

    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Grid container>
        <Grid item xs={12} md={6} lg={6} className="left-corner-signup">
          <div className="center-div">
            <div className="text-field-adjust">
              <h1 style={{ color: themeColor }}>Login!</h1>
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
              <Button
                className="text-field-adjust form-btn"
                variant="contained"
                onClick={submitSignup}
              >
                Login
              </Button>
            </div>
            <div>
              <span>Do not have Account? </span>
              <span>
                <Link to="/signup" style={{ color: themeColor }}>
                  Sign Up
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
