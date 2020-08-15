import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {





  },
  TypographyStyle: {

  }
});

export default function Header() {
  const classes = useStyles();
    return(
      <Container className={classes.root} >
        <Typography align="center">lorem ipsum </Typography>
        <Typography align="center">jaorem ipsum lorem lorem ip is mlorem ipsumipsum</Typography>
        <Form />
      </Container>

    );

}
