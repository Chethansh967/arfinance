import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles'; 
import TranslateIcon from '@mui/icons-material/Translate';
import Button from '@mui/material/Button';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import cirrus from '../assets/Cirrustimelogo.png';
import CustomProfileDialog from './CustomProfileDialog';

function Navbar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const[openPopOver,setOpenPopOver]=useState(false)
  const handleProfile=(event)=>{
       setAnchorEl(event.currentTarget)
      setOpenPopOver(true)
  }

   const handleClose=()=>{
     setAnchorEl(null)
   }
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{
          minHeight: '60px', 
          backgroundColor:'#023A59'
        }}
      >
        <Toolbar 
        disableGutters
          sx={{
            minHeight:'60px !important',
            height:'60px !important',
            justifyContent: 'space-between', 
            paddingY: 0, 
          }}
        >
            <img src={cirrus} alt='titlelogo' style={{justifyContent:'flex-start',height: '40px',maxWidth: '100%'}}/>
            <Box sx={{display:'flex',alignItems:'center',gap:theme.spacing(2)}}>
          <Button color='inherit'><TranslateIcon fontSize='medium'/></Button>
         <Button color='inherit'><NotificationsNoneIcon fontSize='medium'/></Button> 
          <Button color='inherit' onClick={handleProfile}><AccountCircleIcon fontSize='large'/></Button>
            </Box>
        </Toolbar>
      </AppBar>
     {openPopOver&& <CustomProfileDialog open={Boolean(anchorEl)}
  anchorEl={anchorEl}
  onClose={handleClose}/>}
    </Box>
    </>
  );
}

export default Navbar;