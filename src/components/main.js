import { BrowserRouter, Route } from "react-router-dom";
import AddProduct from "./addproduct";
import Header from "./header";
import Login from "./login";
import Signup from "./signup";

const Main = (props) => {

    return (
        <BrowserRouter>
            <Header lightTheme={props.lightTheme} setLightTheme={props.setLightTheme} ></Header>
            <Route path="/main/addproduct" component={AddProduct}></Route>
            <Route path="/main/login" component={Login}></Route>
            <Route path="/main/signup" component={Signup}></Route>
        </BrowserRouter>
    )
}

export default Main;