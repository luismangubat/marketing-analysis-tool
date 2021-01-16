import React from 'react'
import '../style/Landing.css'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import NavBar from './NavBar'

function Landing(){
    return(
        <Container>
            <NavBar></NavBar>
            <h1>Marketeer</h1>
            <p>A powerful tool to help entrepreneurs collect competitive analysis on Etsy.</p>
            <TextField placeholder="Enter a product or category" width="100%"></TextField>
        </Container>
    );
}

export default Landing;