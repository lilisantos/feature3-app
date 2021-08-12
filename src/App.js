import React from 'react';
import { createMuiTheme, ThemeProvider} from '@material-ui/core';
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
        <div className="container mt-2" style={{ marginTop: 60 }}>

          {/* Routes for menu */}
          <Switch>           
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/parent">
              <Parent />
            </Route>
            <Route path="/Minder">
              <Minder />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#00c5c0"
    }
  }
});

