import React, {useState} from 'react';
import {
  createMuiTheme, 
  ThemeProvider, 
  Container, 
  Typography,
  Box } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CheckDays from "../components/CheckDays";


//send request to back-end API to update availability
// async function sendAv({personId, details}){ 
  
  //Post info to backend API
//    fetch('https://feature3-api.herokuapp.com/availability/add', {
//     fetch('https://0.0.0.0:8000/availability/add', {
//       method: 'POST',     
//       body: JSON.stringify({type, food, calories, carbs, protein, fat, userEmail})
//     })    
//     .then(response => {
//       console.log(response.status);
//       return response.status;
//     })   
// }

export default function ParentPage() { 
  const classes = useStyles();
  
    let [category, setCategory] = useState(' ');  
    const [details, setDetails] = useState(' ');
    let [fullTimeDay, setFullTimeDay] = useState(' ');  

    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    let [isSubmitted, setIsSubmitted] = useState();
   
    // Handle change on select fields
    const handleChangeCategory = (event) => {
      setCategory(event.target.value);     
      console.log("category: " + category); 
    }; 
     // Handle change on select field
     const handleChangeFullTime = (event) => {
        setFullTimeDay(event.target.value); 
        console.log("fullTimeDay: " + fullTimeDay);      
      }; 

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" style={{ marginBottom: 50 }}>
            <Link color="inherit" href="/"> Home</Link>        
            <Typography color="textPrimary">Parent Page</Typography>
        </Breadcrumbs>

        <Typography variant="h4" color="secondary" component={'span'} >Your childminder needs</Typography>   
        <div>
        {/* <FormControl className={classes.formControl}> */}
        <form 
              className={classes.formControl}
            //   onSubmit={handleSubmitSearch} 
            >
            <InputLabel shrink id="category-label"> Category </InputLabel>
            <Select
                labelId="category-label"
                label="Category"
                id="category"
                value={category}
                onChange={handleChangeCategory}
                className={classes.selectEmpty}
                placeholer="Category"
                required
            >
                <MenuItem value="" disabled>Select a category</MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Flexible">Flexible</MenuItem>
                <MenuItem value="Short term">Short term</MenuItem>
                <MenuItem value="Long term">Long term</MenuItem>
            </Select>      
        {/* </FormControl> */}
        
        {/* <FormControl className={classes.formControl}> */}
            <InputLabel shrink id="fulltime-day-label"> Full-time day </InputLabel>
            <Select
                labelId="fulltime-day-label"
                label="fulltime-day"
                id="fulltime-day"
                value={fullTimeDay}
                onChange={handleChangeFullTime}
                className={classes.selectEmpty}
            >
                <MenuItem value="" disabled>Select an option</MenuItem>
                <MenuItem value="Mon-Fri 8-6">Mon-Fri 8-6</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
            </Select>      
            <FormHelperText>If Full-time, please provide the above</FormHelperText>
        {/* </FormControl> */}

        <CheckDays />
        </form>  
        </div>


        <Box justifyContent="center">       
                
            <form              
                className={classes.formControl}
                // onSubmit={handleSubmit}
                error={error} 
                >
               
     
{/*         <TextField
                id="details"
                label="Details"
                maxRows={4}
                value={value}
                onChange={handleChangeTextField}
                rows={4}
                            
            /> */}



    
        </form>       
         
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
      },
  backgroundColor: "#00c5c0"
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      minWidth: 120,  

    },
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 300,  
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 200
  },
  inputLabel: {
    width: 200
  },
  table: {
    minWidth: 650,
    textTransform: 'capitalize',
  },


}));

