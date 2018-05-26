import { hot } from 'react-hot-loader';
import * as React from 'react';
import LaunchDetails from './view/LaunchDetails';

import './styles/theme.sass';
import LaunchesList from './view/LaunchesList';


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    view: "list"
  }
  render() {
   
      switch(this.state.view)
      {
        case 'list':
          return (
              <LaunchesList/>
          )
        case 'details':
          return (
              <LaunchDetails/>
          )
        default:
          return <p>ups</p>
    
      }
  }
}

export default hot(module)(App);
