import { hot } from 'react-hot-loader';
import * as React from 'react';
import LaunchDetails from './view/LaunchDetails';

import './styles/theme.sass';
import LaunchesList from './view/LaunchesList';


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <LaunchesList />
        
      </main>
    );
  }
}

export default hot(module)(App);
