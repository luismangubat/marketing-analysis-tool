import React from 'react'
import '../style/NavBar.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import BrandLogo from './BrandLogo';

function NavBar(){
    return(
        <Toolbar>
            <BrandLogo></BrandLogo>
            <Button size="large">Log In</Button>
            <Button variant="contained"
                disableElevation
                color="secondary"
                size="large">Sign Up</Button>
        </Toolbar>
    );
}

export default NavBar;