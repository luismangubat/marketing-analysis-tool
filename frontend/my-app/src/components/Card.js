import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  root: {
    display:'flex',
    alignItems: 'center'

  }
});

export default function Card(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.attr}</Title>
      <Typography component="p" variant="h4">
        {props.value}
      </Typography>

    </React.Fragment>
  );
}