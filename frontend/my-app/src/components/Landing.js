import React from 'react'
import '../style/Landing.css'
import Container from '@material-ui/core/Container';
import NavBar from './NavBar'
import Button from '@material-ui/core/Button'



function Landing(){
    return(
        <Container>
            <NavBar></NavBar>
            <h1>Marketeer</h1>
            <p>A powerful tool to help entrepreneurs collect competitive analysis on Etsy.</p>
            <Button variant="contained"
                disableElevation
                color="primary"
                size="large">Get Started</Button>
            <Button size="large">Log In</Button>
            
        </Container>
    );
}

export default Landing;