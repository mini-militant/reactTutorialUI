import React, { Component } from 'react';
import { render } from 'react-dom';
import ResponsiveDrawer from './ResponsiveDrawer';
import './style.css';
import Router from './Router'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <ResponsiveDrawer />
        <Router/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
