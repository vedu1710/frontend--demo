import { createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Chart from './components/dashboard/Chart';
import Dashboard from './components/dashboard/Dashboard';
import Deposits from './components/dashboard/Deposits';
import Orders from './components/dashboard/Orders';
import Header from './components/header';
import Main from './components/main';
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
            <Route path="/main">
              <Main lightTheme={lightTheme} setLightTheme={setLightTheme} />
            </Route>
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Route path="/Chart" component={Chart}></Route>
            <Route path="/Deposits" component={Deposits}></Route>
            <Route path="/Orders" component={Orders}></Route>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          </BrowserRouter>
        </ProductProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
