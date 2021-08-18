import React from 'react';
import { 
  createTheme, 
  ThemeProvider, 
  Container, 
  Typography,
  Box
 } from '@material-ui/core';  
import { makeStyles } from '@material-ui/core/styles';

export default function HomePage(){  
  const classes = useStyles();
  return (    
    <ThemeProvider theme={theme}>      
      <Container justifyContent='center' >      
        <Box justifyContent="center" display="flex" className={classes.root}>                   
          <Typography variant="h2" color="secondary" className={classes.title}>Welcome to </Typography>           
          <img src="/logo oogo.png" alt="logo" className={classes.logo} />           
        </Box>
      </Container>
    </ThemeProvider>
   
  );
}

//Theme styles
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

const useStyles = makeStyles((theme) => ({
  root:{
    flex:1,
    flexDirection:'row',   
    marginBottom: 100,    
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100
},
  logo: {
    width: 150,
    paddingLeft: 20,
    marginTop: 20,
    justifyContent: "center",
  }, 
  title: {
    fontWeight: 'bold'
  }
}));
