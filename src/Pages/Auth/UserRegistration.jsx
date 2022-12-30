import {useState} from 'react'
import { FormControlLabel, Checkbox, Box, TextField, Button, Alert  } from '@mui/material'
import { useNavigate } from 'react-router-dom'




const UserRegistration = () => {
    const [error, setError] = useState({
        status:false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
    const handleSubmit =(e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
            tc : data.get('tc')
        }
        
        if( actualData.name && actualData.email && actualData.password && actualData.tc !== null){
           if(actualData.password === actualData.password_confirmation   ){
            console.log(actualData);
            document.getElementById('RegistrationForm').reset()
            setError({status:true, msg: "Registration Successfull", type:'success'})
            navigate('/')
           }else{
            setError({status:true, msg: "Password And Confirm_Password Doesn't Match", type:'error'})
           }
        }else{
            setError({status:true, msg: "All Fields are Required", type:'error'})
        }
    }
  return (
    <>
     <Box component='form' noValidate sx={{mt: 1}} id='RegistrationForm' onSubmit={handleSubmit} >
     <TextField margin='normal' required fullWidth id='name' name='name' label='Enter Your Name' />
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
        <TextField margin='normal' required fullWidth id='password' name='password' label='Enter Your Passowrd' type='password' />
        <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Verify Password' type='password' />
        <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc' id='tc' />} label="I agree to terms and condition." />  
    <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>SignUp</Button>
    </Box>
    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : '' }
    </Box>
    </>
  )
}

export default UserRegistration