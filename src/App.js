import React from 'react';
import { createTheme, ThemeProvider} from '@material-ui/core';
import Header from './components/navbar/Header';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Parent from './components/ParentPage'
import Minder from './components/MinderPage'
import Home from './components/HomePage'

export default function App() {  
  
  return (
    <div className="wrapper">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div className="container mt-2" style={{ marginTop: 100 }}>

          {/* Routes for menu */}
          <Switch>           
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/parent">
              <Parent />
            </Route>
            <Route path="/minder">
              <Minder />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#00c5c0"
    }
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',      
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
 });

