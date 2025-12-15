import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {Outlet} from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div style={{ marginLeft: 200, marginTop: 60 }}>
        <Outlet/>
      </div>
    </>
  )
}

export default AppLayout
