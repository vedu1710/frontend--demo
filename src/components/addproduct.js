import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React, { useContext } from 'react'
import app_config from '../config';
import { ProductContext } from '../productContext';
import { Form, Formik, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';


const AddProduct = () => {

    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const { fetchProductDetails } = useContext(ProductContext);
    const url = app_config.api_url;
    const initialValues = {
        name: '',
        price: '',
        details: '',
        category: '',
        quantity: '',
    }

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props);

         const reqOptions = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' }
        }

        fetch(url + '/product/add', reqOptions)
            .then((res) => {
                console.log(res.status);
                if (res.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Product Added!'
                    })
                }
                return res.json()
            })
            .then((data) => {
                console.log(data);
                fetchProductDetails();

            })

    }



    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Add Product</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} >
                    {
                        ({
                            values, handleChange, handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField label="Product Name" placeholder='Enter your product name' variant="standard" onChange={handleChange} value={values.name} id="name" fullWidth  helperText={<ErrorMessage name="Product Name" />} />
                                <TextField label="Product Price" placeholder='Enter your product price' variant="standard" onChange={handleChange} value={values.price} id="price" fullWidth  helperText={<ErrorMessage name="Product Price" />} />
                                <TextField label="Product Details" placeholder='Enter your product details' variant="standard" onChange={handleChange} value={values.details} id="details" fullWidth  helperText={<ErrorMessage name="Product Details" />} />
                                <TextField label="Product Category" placeholder='Enter your product category' variant="standard" onChange={handleChange} value={values.category} id="category" fullWidth  helperText={<ErrorMessage name="Product Category" />} />
                                <TextField label="Product Quantity" placeholder='Enter your product quantity' variant="standard" onChange={handleChange} value={values.quantity} id="quantity" fullWidth  helperText={<ErrorMessage name="Product Quantity" />} />



                                <Button type="submit" variant='contained' color='primary'>Add Product</Button>
                            </form>
                        )}
                </Formik>
            </Paper>
        </Grid>
    )
}


export default AddProduct;