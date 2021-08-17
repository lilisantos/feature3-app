import React, {useState} from 'react';
import {
  createTheme, 
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

import Alert from '@material-ui/lab/Alert';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CheckDays from "../components/CheckDays";
import { Check } from '@material-ui/icons';
import { findByLabelText } from '@testing-library/dom';

import CalendarTemplate from 'availability-calendar-react';


//Send request to back-end API to update availability
async function sendAv({personId, category, availability}){ 
  
  //Post info to backend API
  //  fetch('https://feature3-api.herokuapp.com/availability/add', {
    fetch('http://localhost:8005/availabilityMinder/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },    
      body: JSON.stringify({personId, category, availability})
    })    
    .then(response => {
      console.log(response.status);
      return response.status;
    })   
}

export default function MinderPage() { 
  const [availability, setAvailability] = useState([])
  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
    primaryColor: "#00c5c0",
    secondaryColor: "#ffb000",
    primaryFontColor: "#444444",
    fontFamily: "Roboto",
    fontSize: 12,
    startTime: "8:00",
    endTime: "20:00"
  })
   // Person ID number set for prototyping purposes
   const [personId, setPersonId] = useState('minder001');

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState();

  //Variables to setup data for POST request
    let [category, setCategory] = useState(' ');  
    const [details, setDetails] = useState(' ');

    //Validation and error checking variables
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    let [isSubmitted, setIsSubmitted] = useState();

    // Handle change on select field
    const handleChangeCategory = (event) => {
      setCategory(event.target.value);    
      console.log("category: " + category); 
    }; 

   const handleSubmit = async e => {
      e.preventDefault();

      try{
        //Calls function to post availability
        const responseAv = await sendAv({personId, category, availability});  
        setIsSubmitted(true); 
      }catch(ex){
        console.log("Send availability response error:" + ex); 
      }
  }

  
  console.log("ava: " + JSON.stringify(availability));
  console.log("post: " + JSON.stringify({personId, category, availability}));

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Paper className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" style={{ marginBottom: 50 }}>
          <Link color="inherit" href="/">Home</Link>         
          <Typography color="textPrimary">Minder Page</Typography>
        </Breadcrumbs>

        <Typography variant="h4" color="secondary" component={'span'}>Your availability </Typography>   
        <div>
            <form 
              className={classes.formControl}
              onSubmit={handleSubmit}
              error={error}  
            >
            <Typography className={classes.label} color="secondary" >Category</Typography>         
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
              <Box component="span" m={1}>  
                <Typography className={classes.label} color="secondary">Pick available days and times</Typography>         
                <Calendar />
              </Box> 
            <Button
              type="submit"              
              variant="contained"
              color="secondary"
              className={classes.submit}
              on
            >
                Save
            </Button>  
             {/* Shows success message */}
             {isSubmitted &&
                <Alert severity="success">Availability saved with success!</Alert>                        
              }
            </form>
          </div>
         
        </Paper>
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
  backgroundColor: "#00c5c0",
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
    width: 200,
   
  },
 
  paper: {
    marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
},
label: {
  fontSize: '20px',
  marginTop: 20
},
textArea: {
  width: '30%',
  marginTop: 10
},
submit: {
  margin: 20,
  alignSelf: 'right',
},

}));