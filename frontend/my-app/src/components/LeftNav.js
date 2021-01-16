import React from 'react'
import BrandLogo from './BrandLogo'
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {mainListItems} from './listItems'
import List from '@material-ui/core/List';

const drawerWidth = 240;
    const theme = createMuiTheme({
        typography: {
            fontFamily: [
                'IBM Plex Serif',
                'Inter',
              ].join(','),
        }
    });
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        drawerPaper: {
          position: 'relative',
          whiteSpace: 'nowrap',
          width: drawerWidth,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        paper: {
          padding: theme.spacing(2),
          display: 'flex',
          overflow: 'auto',
          flexDirection: 'column',
        }
    

      }));

export default function LeftNav(){
    const classes = useStyles();
    
    return(
        <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, false),
        }}
        open={true} >
        <BrandLogo></BrandLogo>
        <ThemeProvider>
            <List>{mainListItems}</List>
        </ThemeProvider>
        
      </Drawer>
    );
}