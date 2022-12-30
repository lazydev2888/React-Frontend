import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'


const Layout = () => {
  return (
    <>
    <CssBaseline />
    <Navbar/>
    <Outlet />
    </>
  )
}

export default Layout