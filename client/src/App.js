import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';
import Header from './views/Header';
import Footer from './views/Footer';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <Header />
              <Main />
              <Footer />
          </div>
      </div>
    );
  }
}

export default App;
