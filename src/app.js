import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Paper, Box} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "500px",
    top: "40%",
    left: "40%",
    right: "60%",
    color: "white",



  },
});


export default function App() {
  const classes = useStyles();
  return (
    <Paper>
      <Box display="flex" justifyContent="center" alignItems="center" className={classes.root}>
        <Header />
      </Box>
    </Paper>
    );
}
