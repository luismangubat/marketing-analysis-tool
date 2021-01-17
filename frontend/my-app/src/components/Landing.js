import React from 'react'
import '../style/Landing.css'
import Container from '@material-ui/core/Container';
import NavBar from './NavBar'
import SearchBar from "./SearchBar";

function doSearch(){

}


function Landing(){
    return(
        <Container>
            <NavBar></NavBar>
            <h1>Marketeer</h1>
            <p>A powerful tool to help entrepreneurs collect competitive analysis on Etsy.</p>
            <SearchBar></SearchBar>
        </Container>
    );
}

export default Landing;