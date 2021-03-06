import * as React from "react"
import { 
    IconButton,  
    Drawer, 
    createTheme, 
    ThemeProvider  } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const SideDrawer = ({navLinks}) => {
    const classes = useStyles();

    const [state, setState] = useState({ right: false })

    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return
        }
        setState({ [anchor]: open })
    };

    const sideDrawerList = (anchor) => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >        
   
     <List component="nav">
      {navLinks.map(({ title, path }) => (
        <a href={path} key={title} className={classes.linkText} >
          <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
        </a>
      ))}
    </List>          
        </div>
      );     

    return(
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <IconButton 
                    edge="start" 
                    arial-lable="menu"
                    onClick={toggleDrawer("right", true)}
                >
                    <Menu fontSize="large" color= "secondary" />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={state.right}
                    onOpen={toggleDrawer("right", true)}
                    onClose={toggleDrawer("right", false)}
                >
                    {sideDrawerList("right")}
                </Drawer>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default SideDrawer

//The,e style
const useStyles = makeStyles({
  list: {
  //   width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `initial`,
    color: "#00c5c0",
  },
});

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