import React from 'react';
import Movies from './Movies/Movies'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Movies/>
        </header>
      </div>
    );
  }
}

export default App;
