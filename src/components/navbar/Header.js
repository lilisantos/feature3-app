/* Navbar based on the tutorial available at
* https://ansonlowzf.com/how-to-build-a-material-ui-navbar/
*/
import * as React from "react"
import { 
    IconButton,     
    Container,
    Hidden, 
    Toolbar, 
    AppBar, 
    Fab, 
    createTheme, 
    ThemeProvider, 
    Typography
     } from "@material-ui/core"
import { KeyboardArrowUp } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import HideOnScroll from "./HideOnScroll";
import SideDrawer from "./SideDrawer"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

const navLinks = [
    { title: `Home`, path: `/` },
    { title: `Parent`, path: `/parent` },
    { title: `Minder`, path: `/minder` },
  ];

  const Header = () => {

    const classes = useStyles(); 

    return (
        
        <ThemeProvider theme={theme}> 
            <HideOnScroll>
                <AppBar position="fixed" >
                    <Toolbar>
                        <Container className={classes.navbarDisplayFlex}>
                            <Link color="inherit" href="/">
                                <IconButton edge="start" aria-label="home" >
                                    <img src="/logo oogo.png" alt="logo" className={classes.logo} />
                                </IconButton>
                            </Link>  
                           
                            {/* Renders menu bar on small port views  */}
                            <Hidden smDown>
                                 <List
                                    component="nav"
                                    aria-labelledby="main navigation"
                                    className={classes.navDisplayFlex} 
                                    >
                                    {navLinks.map(({ title, path }) => (
                                        <a href={path} key={title} className={classes.linkText} style={{fontColor:" #00c5c0"}, {fontFamily: '"Helvetica Neue"'}}>
                                        <ListItem button>
                                            <ListItemText secondary={title} />
                                        </ListItem>
                                        </a>
                                    ))}
                                </List>
                            
                            </Hidden>

                             {/* Renders hamburg icon on medium port views  */}
                            <Hidden mdUp>
                                <SideDrawer navLinks={navLinks} /> 
                            </Hidden>
                        </Container>            
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            
            
        </ThemeProvider>  
         
    )
  }
  export default Header


  
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

//Theme styles
const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
      },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
       
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `initial`,
        fontColor: "#00c5c0",
    },
    root: {
        width: 360,
      },
    logo: {
        width: 90
    }
});
