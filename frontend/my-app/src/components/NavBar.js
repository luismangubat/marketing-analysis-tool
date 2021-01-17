import React from 'react'
import '../style/NavBar.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import BrandLogo from './BrandLogo';
import Line  from '../assets/line.svg'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    imagelogo: {
        paddingLeft: '25px'
    }, 

    buttonLogin: {
        width: '30px',
        height: '100px',

        
    }
    
  }));
  
  

function NavBar(){
    const classes = useStyles();
    return(
        <Toolbar>
            <img src={Line} className={classes.imagelogo}></img>
            <BrandLogo></BrandLogo>
            <Button> Login</Button>
            <Button> Height</Button>
        </Toolbar>
    );
}

export default NavBar;