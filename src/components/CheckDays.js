import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {
  createTheme, 
  ThemeProvider,
Typography } from '@material-ui/core';  
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    paddingTop: 16,     
  },
  formGroup: {
    paddingTop: 16, 
  },
  FormControlLabel: {
    fontSize: '12px'
  }
}));

export default function CheckDays() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    monday: false, 
    tuesday: false,
    wednesday: false,
    thursady: false,
    friday: false,
    saturday: false,
    sunday: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { monday, 
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday} = state;  

  return (
    <ThemeProvider theme={theme}>
  
      <FormControl component="fieldset" className={classes.formControl}>
      <Typography>Pick the days of the week</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={monday} onChange={handleChange} name="monday" />}
            label="Monday"
          />
          <FormControlLabel
            control={<Checkbox checked={tuesday} onChange={handleChange} name="tuesday" />}
            label="Tuesday"
          />
          <FormControlLabel
            control={<Checkbox checked={wednesday} onChange={handleChange} name="wednesday" />}
            label="Wednesday"
          />
          <FormControlLabel
            control={<Checkbox checked={thursday} onChange={handleChange} name="thursday" />}
            label="Thursday"
          />
          <FormControlLabel
            control={<Checkbox checked={friday} onChange={handleChange} name="friday" />}
            label="Friday"
          />
          <FormControlLabel
            control={<Checkbox checked={saturday} onChange={handleChange} name="saturday" />}
            label="Saturday"
          />
          <FormControlLabel
            control={<Checkbox checked={sunday} onChange={handleChange} name="sunday" />}
            label="Sunday"
          />
        </FormGroup>
       
      </FormControl>
  
    </ThemeProvider>   
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
