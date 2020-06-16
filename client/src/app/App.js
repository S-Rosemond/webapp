import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buttons from '../components/buttons/Buttons';
import { Register, Login } from '../components';
import { ThemeProvider } from '@material-ui/core';
import mainTheme from '../theme/main.theme';
import CardState from './../context/Card/card.state';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <CardState>
            <Route exact path='/register' component={Register} />
          </CardState>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
