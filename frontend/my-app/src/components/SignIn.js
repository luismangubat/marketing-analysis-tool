import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GoogleLogin from 'react-google-login';
import Divider from '@material-ui/core/Divider';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseApp from '../utils/firebase';
const responseGoogle = (response) => {
  console.log(response);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',

  },
  paper: {
    margin: theme.spacing(8, 20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
    width: '500px',
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  googleButton: {
    width: "500px",
    backgroundColor: "#4C8BF5",
    color: "white",
    padding: "15px 40px 15px 0px",
    borderColor: 'black',
    borderRadius: "10px",
    textTransform: 'none',
    fontSize: '15px',
    textAlign: 'center',
    contentAlign: 'center',
    marginBottom: '20px',
    marginTop: '25px',
    paddingLeft: '15px',
    border: '2px solid "black"',
    "&:hover": {
        backgroundColor: '#1A73F9'
    },
    inputField: {
      width: '300px'
    },
    gridConatiner: {
      alignContent: 'center'
    },

  }
}));

const auth = firebase.auth();

const SignIn = () => {
  const classes = useStyles();


  const [user] = useAuthState(auth);
  const provider = new firebase.auth.GoogleAuthProvider();
  
  // Wait for authentication to finish, once user is logged in 
  const signInWithGoogle = () => {
      auth.signInWithPopup(provider).then((res) =>{
          console.log(res.user)
          window.location.href = '/browse'
      });
      
  }



  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="body2">
            Create an account
          </Typography>
  
          <Button className={classes.googleButton} onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
     
          <form className={classes.form} noValidate>
          <Divider/>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.inputField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.inputField}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
      <img src='images/signin.png' height="100%" width="41.6%"></img>
    </Grid>
  );
}

export default SignIn;