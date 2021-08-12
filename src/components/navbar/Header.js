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
    createMuiTheme, 
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
                <AppBar position="fixed">
                    <Toolbar>
                        <Container className={classes.navbarDisplayFlex}>
                            <IconButton edge="start" aria-label="home" >
                                <img src="/logo oogo.png" alt="logo" className={classes.logo} />
                            </IconButton>
                            {/* Renders menu bar on small port views  */}
                            <Hidden smDown>
                                 <List
                                    component="nav"
                                    aria-labelledby="main navigation"
                                    className={classes.navDisplayFlex} 
                                    >
                                    {navLinks.map(({ title, path }) => (
                                        <a href={path} key={title} className={classes.linkText}>
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

//Theme styles
const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
      },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    },
    root: {
        width: 360,
      },
    logo: {
        width: 90
    }
});

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