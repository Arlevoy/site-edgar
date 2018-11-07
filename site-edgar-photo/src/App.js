import React, { Component } from 'react';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  fetchCow = async () => {
    try {
      const response = await fetch(`/api/health`);
      const health = await response.json();
      console.log(health);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    this.fetchCow();
    return <Home />;
  }
}

export default App;
