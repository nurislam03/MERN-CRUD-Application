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
          <Container>
              <Header />
              <h1>Welcome to React</h1>
              <Main />
              <Footer />
          </Container>
      </div>
    );
  }
}

export default App;
