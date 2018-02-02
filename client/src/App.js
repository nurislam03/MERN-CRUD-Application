import React, { Component } from 'react';
import './App.css';
import Header from './views/Header';
import Footer from './views/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <h1>Welcome to React</h1>
          <Footer />
      </div>
    );
  }
}

export default App;
