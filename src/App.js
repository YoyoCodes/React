import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: 'Bobo', age: 28},
      {name: 'Another', age: 26},
      {name: 'Test', age: 25}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Bobo the clown', age: 28},
        {name: 'Another', age: 40},
        {name: 'Test', age: 25}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
Hobbies</Person>
<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // need React => compiles to <= return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello"))
  }
}

export default App;
