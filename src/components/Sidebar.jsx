import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Paper,
  InputBase
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import _, { forEach } from 'lodash';
import Dashboard from '../assets/Dashboard.png';
import Employee from '../assets/Employee.png';
import Setting from '../assets/Setting.png';
import Reports from '../assets/Reports.png';
import Export from '../assets/Exports.png';

const drawerWidth = 200;



function Sidebar() {
 
  const [filter,setFilterMenu]=useState(" ")
  const[selectedMenu,setSelectedMenu]=useState();
  const[menu,setmenuList]=useState([]);
  

  const menuItems = [
    { type: 'Dashboard', img: Dashboard },
    { type: 'Employee', img: Employee },
    { type: 'Reports', img: Reports },
    { type: 'Exports', img: Export },
    { type: 'Settings', img: Setting }
  ];

  const filterMenu=_.debounce((e)=>{
    setFilterMenu(e.target.value);
},300)

const handleSearch=()=>{
  if(filter.length>0){
   setmenuList(menuItems.filter(item=>item.type.toLowerCase()===filter.toLowerCase().trim()));
  }else{
    setmenuList(menuItems)
  }
}
useEffect(()=>{
   setmenuList(menuItems);
},[])

const handleEnterSearh=(e)=>{
    if(e.key==="Enter"){
      handleSearch();
    }
}


  return (
    <Paper
      elevation={3}
      sx={{
        width:drawerWidth, 
        position: 'fixed',
        top: '60px',
        left: 0,
        height: '100vh',
        backgroundColor: '#023A59',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        overflowY: 'auto',
      }}
    >

      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 2,
          mx: 2,
          p: '6px 10px',
          borderRadius: '8px',
          backgroundColor: '#014D77',
          width: 'auto',
        }}
      >
        <InputBase
          placeholder="Search"
          sx={{ flex: 1, color: 'white', fontSize: '14px' }}
          onChange={filterMenu}
          onKeyDown={handleEnterSearh}
        />
        <SearchIcon sx={{ opacity: 0.7, color: 'white',cursor:'pointer' }} onClick={handleSearch} />
      </Box>

      <List sx={{ mt: 1 }}>
        {menu.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ justifyContent: 'center' }}>
            <ListItemButton
              sx={{
                width: '100%',
                height: '48px',                     // CONSISTENT HEIGHT
                display: 'flex',
                alignItems: 'center',
                px: 3,
              }}
            >
              <img
                src={item.img}
                alt={item.type}
                style={{
                  width: '22px',
                  height: '22px',
                  marginRight: '12px',
                  filter: 'brightness(0) invert(1)',   // MAKE IMAGE WHITE
                }}
              />

              <ListItemText
                primary={item.type}
                primaryTypographyProps={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Paper>
  );
}

export default Sidebar;
