import React from 'react'
import '../style/App.css';
import {Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Landing from './Landing'
import SignIn from './SignIn'
import Browse from './Browse'

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"Inter", "IBM Plex Serif", serif`,
   body1: {
     fontFamily: "Inter",
    },
    body2: {
      fontSize: '12px',
    }
 
  },
  palette: {
    text: {
      primary: '#000000',
      secondary:'#F56400',
      hint: '#666666',
    },
    primary: { 
      main: '#FF8129',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFE4D1',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <main>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/signin" component={SignIn} />
          <Route path="/browse" component={Browse} />
        </Switch>
      </main>
    </MuiThemeProvider>
    
  );
}

export default App;
