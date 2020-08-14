import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
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

export default function App() {
  return (
    <div className="App">
      <Header />
    </div>
    );
}
