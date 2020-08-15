import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {




  },
});


export default function App() {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={classes.root}>
      <Header />
    </Box>
    );
}
