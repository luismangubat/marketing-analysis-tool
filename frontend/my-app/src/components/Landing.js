import React from 'react'
import '../style/Landing.css'
import Container from '@material-ui/core/Container';
import NavBar from './NavBar'
import SearchBar from "./SearchBar";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  Target from '../assets/target.svg';



const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
  getStartButton: {
    backgroundColor: "#FF8129",
    color: 'white',

    width: '150px',
    fontSize: '12px',
    height: '50',
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: "white",
    color: 'black',
    width: '150px',
    fontSize: '12px',
    height: '50',
    textAlign: 'center',
    borderColor: 'black'

    
  },

  tagLine: {
    zIndex: '100'
  
  },

  logo: {
  },

  container: {
    paddingLeft: '0px'

  },
  buttonContainer: {
    paddingLeft: '100px'
  },

  targetImage: {
    right: '0',
    position: 'absolute',
    paddingTop: '0px',
    zIndex: '-1',
    paddingRight: '70px'


  },
  Navbar: {
    zIndex: '100',
    position:'absolute'
  },

  buttonOuterContainer: {
    paddingLeft: '10px'
  }
  
}));
  

function Landing(){

  const classes = useStyles();
  return(
    <div>
      <NavBar className={classes.NavBar}></NavBar>
      <Container>
      <h1>Marketeer</h1>
      <p className={classes.tagLine}>A powerful analytic tool to help entrepreneurs collect<br/> competitive analysis for content.</p>
        <div className={classes.buttonOuterContainer}>
          <div className={classes.root}>
              <Button className={classes.getStartButton}> Get Started</Button>
              <Button className={classes.loginButton} variant="outlined"> Login</Button>
              <img className={classes.targetImage}src={Target}></img>
          </div>
        </div>
      </Container>
  


    </div>
  );

}

export default Landing;