import React, {useState, useRef } from 'react';
import { 
  createMuiTheme, 
  ThemeProvider, 
  Container, 
  Typography,
  IconButton, 
  Button,
Box} from '@material-ui/core';  
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import DataUsageIcon from '@material-ui/icons/DataUsage';


export default function HomePage(){  
  const classes = useStyles();
  return (    
    <ThemeProvider theme={theme}>      
      <Container justifyContent='center' className={classes.root}>      
        <Box justifyContent="center" display="flex" >
          <Typography variant="h2" color="secondary" spacing={2} >Welcome to 
            <img src="/logo oogo.png" alt="logo" className={classes.logo} /></Typography>
        </Box>
      </Container>
    </ThemeProvider>
   
  );
}
//Theme styles
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

const useStyles = makeStyles((theme) => ({
  root:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 100,


},
  logo: {
    width: 150,
    paddingLeft: 20,
    marginTop: 50,
    paddingTop: 100
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 10,
    marginBottom: 15,
  },
  control: {
    padding: theme.spacing(2),
  },
  linkText: {
    textDecoration: `none`,
    color: `black`
},
}));
