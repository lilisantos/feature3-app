import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {
  createMuiTheme, 
  ThemeProvider, } from '@material-ui/core';  
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
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
    <div className={classes.root}>     
      <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Pick the Days</FormLabel>
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
    </div>
    </ThemeProvider>   
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
    },
backgroundColor: "#00c5c0"
});
