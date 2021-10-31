import React from 'react'
import * as Yup from 'yup'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Login = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
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
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <TextField label="Username" placeholder='Enter username' variant="standard" fullWidth required helperText={<ErrorMessage name="username" />} />
                            <TextField label="Password" placeholder='Enter password' type='password' variant="standard" fullWidth required helperText={<ErrorMessage name="password" />} />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                            <Button type='Submit' color='primary' variant="contained" fullWidth>Log In</Button>
                        </Form>
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
export default Login