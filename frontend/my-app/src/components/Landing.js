import React from 'react'
import '../style/Landing.css'
import Container from '@material-ui/core/Container';
import NavBar from './NavBar'
import SearchBar from "./SearchBar";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  Target from '../assets/target.svg';
import Wave from '../assets/wave.svg';



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
    textAlign: 'center',
    "&:hover": {
      backgroundColor: '#FFAC73'
    }
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
    color: '#22395B'
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
    paddingTop: '-10px',
    zIndex: '-1',
    paddingRight: '70px',
    top: '150px'

  },
  Navbar: {
    zIndex: '100',
    position:'absolute'
  },

  buttonOuterContainer: {
    paddingLeft: '10px'
  }, 
  waveImage: {
    width: '100%',
    zIndex: '-2',
    position: 'absolute',
  }, 
  divide: {
    with: '100px',
    height: '30px',
    paddingLeft: '30px',
  }
  
}));
  

function Landing(){

  const classes = useStyles();
  return(
    <div>
      <NavBar className={classes.NavBar}></NavBar>
      <Container>
      <h1>Marketeer</h1>
      <p className={classes.tagLine}>A powerful analytics tool to help entrepreneurs collect<br/> competitor analysis for their products.</p>
        <div className={classes.buttonOuterContainer}>
          <div className={classes.root}>
              <Button className={classes.getStartButton} onClick={() => window.location.href = '/signin'}> Get Started</Button>
              <Button className={classes.loginButton} variant="outlined"> Login</Button>
              <img className={classes.targetImage}src={Target}></img>
          </div>
        </div>
      </Container>
  
      <img className={classes.waveImage}src={Wave}></img>
    </div>
  );

}

export default Landing;