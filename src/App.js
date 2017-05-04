import React, { Component } from 'react';
import PortofoliosHome from './components/portfolios/portfolios-home';
import './App.css';
import Nav from './components/common/nav/nav';
import LaunchPage from './components/launch/launch-page';

class App extends Component {
  render() {
    return (
      <div className="App">
      		<Nav />
      		{this.props.children}
      </div>
    );
  }
}

export default App;
