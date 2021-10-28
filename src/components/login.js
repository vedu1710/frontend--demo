import React from 'react'
import app_config from "../config";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';

const Login=()=> {
    const url = app_config.api_url;
    
    const paperStyle ={ padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle={backgroundColor:'#239f63'}
   
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
               <h2>Login</h2>
            </Grid>
            <TextField label="Username" placeholder='Enter username' variant="standard" fullWidth required/>
            <TextField label="Password" placeholder='Enter password' type='password' variant="standard" fullWidth required/>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            <Button type='Submit' color='primary' variant="contained"  fullWidth>Log In</Button>
            <Typography>
            <Link href="#">
             Forgot Password ?
            </Link>

            </Typography>
            <Typography> Do you have an account ?
            <Link href="#">
              Sign Up
            </Link>

            </Typography>
         </Paper>
        </Grid>
    );
}
export default Login