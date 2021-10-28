import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React, { useContext } from 'react'
import app_config from '../config';
import { ProductContext } from '../productContext';

const AddProduct = () => {

    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const { fetchProductDetails } = useContext(ProductContext);
    const url = app_config.api_url;


    
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Add Product</h2>
                </Grid>
                <form>
                <TextField label="Product Name" placeholder='Enter your product name' variant="standard" fullWidth required/>
                <TextField label="Product Price" placeholder='Enter your product price' variant="standard" fullWidth required/>
                    
                    <TextField label="Product Details" placeholder='Enter your product details' variant="standard" fullWidth required/>
                    <TextField label="Product Category" placeholder='Enter your product category' variant="standard" fullWidth required/>
                    
                    
                    <Button type='submit' variant='contained' color='primary'>Add Product</Button>
                </form>
            </Paper>
        </Grid>
    )
}


export default AddProduct;