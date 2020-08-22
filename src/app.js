import React from 'react';
import ReactDOM from 'react-dom';
import theme from './Components/UI/theme';
import Header from './Components/UI/header';
import { Paper, Box} from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

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
    <ThemeProvider theme={theme}>
      <Paper>
        <Box display="flex" justifyContent="center" alignItems="center" className={classes.root}>
          <Header />
        </Box>
      </Paper>
    </ThemeProvider>
    );
}
