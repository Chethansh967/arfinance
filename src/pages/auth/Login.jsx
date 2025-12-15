import { Box, Button, InputAdornment, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import cirrus from '../../assets/LoginLogo.png'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router';

function Login() {
    const[formData,setFormData]=useState({email:'',password:''})
    const[passwordVisibility,setPasswordVisibility]=useState(false);
    const navigate=useNavigate();
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleVisibilityOn=()=>{
       setPasswordVisibility(true)
    }
    const handleVisibilityOff=()=>{
        setPasswordVisibility(false)
    }
    const handleRoute=()=>{
      navigate("/signup")
    }
  return (
    <Box
      sx={{
        display: 'flex', // Enable flex layout
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        minHeight: '100vh', // Take up full viewport height
      }}
    >
      <Paper
        elevation={20} 
        sx={{
          width: 400, 
          padding: 4, 
          borderRadius: '15px',
        }}
      >
        <Stack spacing={3}>
          <Box textAlign="center" mb={2}>
            <img src={cirrus} alt='logon' style={{ maxWidth: '207px', height: 'auto' }} /> 
          </Box>
          
          <OutlinedInput placeholder='Email' fullWidth
           endAdornment={<InputAdornment position="end"><EmailIcon/></InputAdornment>}
           onChange={handleChange}
          />
          <OutlinedInput  fullWidth type={passwordVisibility?"text":"password"} placeholder='Password' 
          endAdornment={<InputAdornment position="end"  sx={{cursor:'pointer'}}>
            {passwordVisibility?<VisibilityIcon onClick={handleVisibilityOff}/>:<VisibilityOffIcon onClick={handleVisibilityOn}/>}
            </InputAdornment>}
          onChange={handleChange}
          />
           <Typography 
            variant='body2' 
            textAlign="right" 
            sx={{ 
                color: 'primary.main', 
                cursor: 'pointer', 
                '&:hover': { textDecoration: 'underline' } 
            }}
          >
           Forgot Password?
          </Typography>
          <Button variant='contained' fullWidth sx={{ py: 1.5 }}>
            Login
          </Button>
          
          <Typography 
            variant='body2' 
            textAlign="center" 
            sx={{ 
                color: 'primary.main', 
                cursor: 'pointer', 
                '&:hover': { textDecoration: 'underline' } 
            }}
            onClick={handleRoute}
          >
            Create Account
          </Typography>
        </Stack>
      </Paper>
    </Box>
  )
}

export default Login