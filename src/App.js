import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button raised primary>
          HELLO WORLD!
        </Button>
      </div>
    );
  }
}

export default App;
