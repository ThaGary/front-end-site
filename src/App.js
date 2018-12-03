import React, { Component } from 'react';
import './App.css';
import Students from './students.js';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      students : null 
    }
  }
  async componentDidMount() {
    fetch('https://g102database.herokuapp.com/')
    .then(response => response.json())
    .then(students => this.setState({ students }))
  }
    render() {
        return ( 
          <div className = "App" >
          {this.state.students ? <Students students={this.state.students} /> : <div>Loading</div>}
          </div>
        );
    }
  }

export default App;