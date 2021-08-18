import React, {useState} from 'react';
import {
  createTheme, 
  ThemeProvider, 
  Container, 
  Typography,
  Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CalendarTemplate from 'availability-calendar-react';
import Alert from '@material-ui/lab/Alert';

//Send request to back-end API to update availability
async function sendAv({personId, category, fullTimeDay, availability, details}){ 
  
  //Post info to API
   fetch('https://feature3-api.herokuapp.com/availabilityParent/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({personId, category, fullTimeDay, availability, details})
    })    
    .then(response => {
      console.log(response.status);
      return response.status;
    })   
}

export default function ParentPage() { 
  // Access to custom styles
  const classes = useStyles();

  const [availability, setAvailability] = useState([]);
  // Custom styles for calendar component
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
  
   // Person ID number set default only for prototyping purposes //
   const personId = useState('parent001');

    let [category, setCategory] = useState(' ');  
    const [details, setDetails] = useState(' ');
    let [fullTimeDay, setFullTimeDay] = useState(' ');  
    let [isFullTime, setIsFullTime] = useState();  
     //Validation variable
    let [isSubmitted, setIsSubmitted] = useState();
   
    // Handle change on category field
    const handleChangeCategory = (event) => {
      setCategory(event.target.value); 
    
      //Checks category to display form according to category chosen
      if (event.target.value === "Full-time"){
        setIsFullTime(true);
      }else if(event.target.value === "Part-time" || event.target.value === "Flexible"){
        setIsFullTime(false);
      }      
    }; 

    // Handle change on full-time hours field
    const handleChangeFullTime = (event) => {
      setFullTimeDay(event.target.value);       
    }; 
      
    // Handle change on details textarea field
    const handleChangeDetails = (event) => {
      setDetails(event.target.value);       
    };

    //Submit data 
    const handleSubmit = async e => {
      e.preventDefault();

      try{
        //Calls function to post availability
        const responseAv = await sendAv({personId, category, fullTimeDay, availability, details});  
        setIsSubmitted(true); // Variable used to display success message
      }catch(ex){
        console.log("Send availability response error:" + ex); 
      }
    }

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Paper className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" style={{ marginBottom: 50 }}>
            <Link color="inherit" href="/">Home</Link>        
            <Typography color="textPrimary">Parent Page</Typography>
        </Breadcrumbs>

        <Typography variant="h4" color="secondary" component={'span'}>Your childminder needs</Typography>   
        <div>
          <form className={classes.formControl}  onSubmit={handleSubmit}  >
            <Typography className={classes.label} color="secondary">Category</Typography>
            <Select
                labelId="category-label"
                label="Category"
                id="category"
                value={category}
                defaultValue={" "}
                onChange={handleChangeCategory}
                className={classes.selectEmpty}
                placeholer="Category"
                required
            >
                <MenuItem value=" " disabled>Select a category</MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Flexible">Flexible</MenuItem>
                <MenuItem value="Short term">Short term</MenuItem>
                <MenuItem value="Long term">Long term</MenuItem>
            </Select>      

            {/* Checks if the user selected "Full-time" as category */}
            {isFullTime ?    

              // If so, displays confirmation of full-time hours
              <div>
                <Typography className={classes.label} color="secondary">Full-time hours</Typography>
                <Select
                    labelId="fulltime-day-label"
                    label="fulltime-day"
                    id="fulltime-day"
                    value={fullTimeDay}
                    defaultValue={" "}
                    onChange={handleChangeFullTime}
                    className={classes.selectEmpty}
                    
                >
                  <MenuItem value=" " disabled>Select an option</MenuItem>
                  <MenuItem value="Mon-Fri 8-6">Mon-Fri 8-6</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>      
                <FormHelperText>Please confirm full-time hours</FormHelperText>
              </div>
              
            // If "Part-time" or "Flexible" options were selected, displays calendar so the user can choose
            // days and times
            : isFullTime === false ?
              <Box component="span" m={1}>     
                <Typography className={classes.label} color="secondary">Pick days and times</Typography>       
                <Calendar />
              </Box>

            : <Box></Box>
            }       

            <Typography className={classes.label} color="secondary">More details about your needs</Typography>
            <TextareaAutosize 
              className={classes.textArea} 
              aria-label="details-textarea" 
              placeholder="Details" 
              minRows={3}
              value={details}
              onChange={handleChangeDetails}
            />

            <Box>     
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
            </Box>
           
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

