import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper,  TextField, Typography } from '@mui/material'
import { ErrorMessage,  Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'

const Signup = () => {
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

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
    })

    

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
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>
                    {(props) => (
                        <Form>
                <TextField label="Name" placeholder='Enter your name' variant="standard" fullWidth required helperText={<ErrorMessage name="name" />}/>
                <TextField label="Email" placeholder='Enter your email' variant="standard" fullWidth required helperText={<ErrorMessage name="email" />}/>
                    
                    <TextField label="Phone Number" placeholder='Enter your phone number' variant="standard" fullWidth required helperText={<ErrorMessage name="phone number" />}/>
                    <TextField label="Password" placeholder='Enter your password' variant="standard" fullWidth required helperText={<ErrorMessage name="password" />}/>
                    <TextField label="Confirm Password" placeholder='Confirm your password' variant="standard" fullWidth required helperText={<ErrorMessage name="confirm password" />}/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup;