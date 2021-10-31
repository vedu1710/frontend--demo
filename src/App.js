import { createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './components/addproduct';
import Chart from './components/dashboard/Chart';
import Dashboard from './components/dashboard/Dashboard';
import Deposits from './components/dashboard/Deposits';
import Orders from './components/dashboard/Orders';
import Header from './components/header';
import Login from './components/login';
import Signup from './components/signup';
import { ProductProvider } from './productContext';

function App() {
  const [lightTheme, setLightTheme] = useState(true);

  const theme = createTheme({
    palette: {
      mode: lightTheme ? "light" : "dark",
    },
  });

  const myTheme = createTheme({
    palette: {
      mode: lightTheme ? "light" : "dark",
      secondary: {
        main: "#00e9b3",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <ProductProvider>
          <BrowserRouter>
            <Header lightTheme={lightTheme} setLightTheme={setLightTheme} ></Header>
            <Route path="/addproduct" component={AddProduct}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Route path="/Chart" component={Chart}></Route>
            <Route path="/Deposits" component={Deposits}></Route>
            <Route path="/Orders" component={Orders}></Route>
          </BrowserRouter>
        </ProductProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
