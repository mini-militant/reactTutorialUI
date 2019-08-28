import React, { Component } from 'react';
import { render } from 'react-dom';
import ResponsiveDrawer from './Layout';
import './style.css';
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
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

render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));
