import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      paddingLeft: '1%',
      paddingRight: '1%',
      marginTop: '2%'
    }
}));

export default function SearchBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField placeholder="Enter a product or category" 
        fullWidth 
        color="secondary" 
        variant="outlined" 
        ></TextField>
    </div>
  );
}