import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "50vh",
    right: "50vw",




  },
  TypographyStyle: {

  }
});

export default function Header() {
  const classes = useStyles();
    return(
      <Container className={classes.root} >
        <Typography>Fan Club Benefits</Typography>
        <Typography>Hi! This is a survey to better suite you to the needs of Fan's Club!</Typography>
        <Form />
      </Container>

    );

}
