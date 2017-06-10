import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      item: this.props.item,
      description: this.props.description
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('TodoForm cacheThis', this.props.cacheThis);
    if (this.props.addListItem) this.props.addListItem(this.state.item, this.state.description);
    if (this.props.editListItem) this.props.editListItem(this.props.id, this.state.item, this.state.description, this.props.slideUp);
    e.target.reset();
  }

  render() {

    console.log("TodoForm id:",this.props.id);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">Item</label>
        <input type="text" name="item" id="item" onChange={this.handleChange} value={this.state.item}/>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" onChange={this.handleChange} value={this.state.description}/>
        <input type="submit"/>
      </form>
      );
  }
}

export default TodoForm;