import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Person name="Laura" age="30"/>
        <Person name="Manu">Hobbies</Person>
        <Person name="Steph" age="59"/>
      </div>
    );
    // need React => compiles to <= return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello"))
  }
}

export default App;
