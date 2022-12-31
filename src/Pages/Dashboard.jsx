import React from 'react'
import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Changepassword from './Auth/Changepassword'

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () =>{
    console.log("Logout Clicked");
    navigate('/login')
  }
  return (
    <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{backgroundColor:'gray', p: 5, color:'white'}}>
        <h1>Dashboard</h1>
   <Typography variant='h5'>Email:Lazydevcoder@gmail.com</Typography>
   <Typography variant='h6'>Name:Faraz</Typography>
   <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{
    mt : 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}  >
        <Changepassword />
        </Grid>

    </Grid>
    </>
  )
}

export default Dashboard