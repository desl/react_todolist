import React, { Component } from 'react';
import './App.css';
// import Todo from './Todo';
import List from './List';
import Button from './Button';
import Alink from './Alink';

class App extends Component {

  constructor(props){
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: ''
    }
  }

  // handleChange(e){
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  // handleSubmit(e){
  //   e.preventDefault();
  //   console.log("TARGET:", e);
  //   this.setState({name: e.target});
  // }

  // handleFormSubmit(e){
  //   e.preventDefault();
  //   console.log(e);
  //   debugger;
  //   // this.setState({item: e.target.elements[0].value, description: e.target.elements[1].value});
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1>Todo List</h1>
        </div>
        <List/>

        <div>
        <h1>DON'T PRESS THE BUTTON!</h1>
        <Button/>
        </div>
        <Alink text="foo" href="http://google.com" handleClick={() => {console.log("check this out")}}/>
      </div>
    );
  }
}

export default App;
