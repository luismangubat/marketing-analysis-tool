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
        </Toolbar>
    );
}

export default NavBar;