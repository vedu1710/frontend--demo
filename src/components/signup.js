import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup'
import app_config from '../config';

const Signup = () => {

    const url = app_config.api_url;
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
    })

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)

        const reqOptions = {
            method: "post",
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' }
        
    }
    fetch(url + '/user/add', reqOptions)
    .then((res) => {
        console.log(res.status);
        if (res.status == 200) {
            Swal.fire({
                icon: 'success',
                title: 'Signed Up!',
                text: 'You have successfully Registered'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Something went wrong'
            });
        }
        return res.json()

    })
    .then((data) => {
        console.log(data);
    })

}
        
    
    
    



    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(
                        { values, handleSubmit, handleChange }
                    ) => (
                        <form onSubmit={handleSubmit}>
                            <TextField label="Name" placeholder='Enter your name' variant="standard" onChange={handleChange} value={values.name} id="name" fullWidth required helperText={<ErrorMessage name="name" />} />
                            <TextField label="Email" placeholder='Enter your email' variant="standard" onChange={handleChange} value={values.email} id="email" fullWidth required helperText={<ErrorMessage name="email" />} />

                            <TextField label="Phone Number" placeholder='Enter your phone number' variant="standard" onChange={handleChange} value={values.phonenumber} id="phone number" fullWidth required helperText={<ErrorMessage name="phone number" />} />
                            <TextField label="Password" placeholder='Enter your password' variant="standard" onChange={handleChange} value={values.password} id="password" fullWidth required helperText={<ErrorMessage name="password" />} />
                            <TextField label="Confirm Password" placeholder='Confirm your password' variant="standard" onChange={handleChange} value={values.confirmpassword} id="confirm password" fullWidth required helperText={<ErrorMessage name="confirm password" />} />
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="I accept the terms and conditions."
                            />
                            <Button type='Submit' variant='contained' color='primary'>Sign up</Button>
                        </form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup;