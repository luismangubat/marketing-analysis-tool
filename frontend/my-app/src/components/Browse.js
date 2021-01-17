import React from 'react';
import LeftNav from './LeftNav'
import Dashboard from './Dashboard'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import { Container, FormHelperText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
      }
}));

export default function Browse() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LeftNav></LeftNav>
      <Container>
        <SearchBar></SearchBar>
        <Dashboard></Dashboard>
      </Container>
      
    </div>
  );
}