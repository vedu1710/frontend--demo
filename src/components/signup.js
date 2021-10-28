import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper,  TextField, Typography } from '@mui/material'
import React from 'react'
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    

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
                <form>
                <TextField label="Name" placeholder='Enter your name' variant="standard" fullWidth required/>
                <TextField label="Email" placeholder='Enter your email' variant="standard" fullWidth required/>
                    
                    <TextField label="Phone Number" placeholder='Enter your phone number' variant="standard" fullWidth required/>
                    <TextField label="Password" placeholder='Enter your password' variant="standard" fullWidth required/>
                    <TextField label="Confirm Password" placeholder='Confirm your password' variant="standard" fullWidth required/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;