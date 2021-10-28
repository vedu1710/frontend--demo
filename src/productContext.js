import { createContext, useState } from "react";
import app_config from "../src/config";

export const ProductContext = createContext();

export const ProductProvider = props => {
    const url = app_config.api_url;
    
    const [productArray,setproductArray] = useState([]);
    


    const fetchProductDetails = () => {
        fetch(url + '/product/getall')
            .then((res) => {
                console.log(res.status);
                return res.json();
            })
            .then((data => {
                console.log(data);
                // setproductArray(data);
            }))
    }

    return (
        <ProductContext.Provider value={{ productArray, setproductArray, fetchProductDetails }}>
            {props.children}
        </ProductContext.Provider>
    )
}