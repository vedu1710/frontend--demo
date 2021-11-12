import React from 'react'
import * as Yup from 'yup'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { ErrorMessage, Formik } from 'formik';
import app_config from '../config';
import Swal from 'sweetalert2';

const Login = () => {

    const url = app_config.api_url;


    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
   
   
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        
        fetch(url+'/user/getbyemail/'+values.email)
        .then( (res) => {
            console.log(res.status);
            return res.json();
        } )
        .then( (data) => {
            if(data){

                if(data.password == values.password){
                    Swal.fire({
                        icon : 'success',
                        title: 'Success',
                        text : 'Logged in successfully!'
                    })

                    console.log('login success')

                    return;
                }else{
                    console.log('password incorrect');
                }


            }else{
                console.log('user not found')
            }

            Swal.fire({
                icon : 'error',
                title : 'Error',
                text : 'Something went wrong!'
            })

        } )

    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({values, handleChange, handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                <TextField label="Username" placeholder='Enter username' variant="standard" onChange={handleChange} value={values.username} id="username" fullWidth required helperText={<ErrorMessage name="username" />} />
                <TextField label="Password" placeholder='Enter password' type='password' variant="standard" onChange={handleChange}  value={values.password} id="password" fullWidth required helperText={<ErrorMessage name="password" />} />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Button type='Submit' color='primary' variant="contained" fullWidth>Log In</Button>
                </form>
                    )}
                
                </Formik>
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
export default Login;