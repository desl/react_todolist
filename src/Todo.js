import React, { Component } from 'react';
import TodoForm from './TodoForm';
import './Todo.css';
// const CSSTransitionGroup = React.addons.CSSTransitionGroup;
// const TransitionGroup = React.addons.TransitionGroup;
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TransitionGroup from 'react-transition-group/TransitionGroup';

class Todo extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      rColor : "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random() * 256)+ ")",
      visibile: 'Slide Up'
    }
  }

  handleClick(){
    this.setState({ visible: ! this.state.visible });
  }

  render() {

    let cssClass;

    if (this.props.status === 'complete'){
      cssClass = "todo complete";
    } else{
      cssClass = "todo incomplete";
    }
    console.log("Todo.js id:", this.props.id);

    return (
      <div className={cssClass}>
        <h2>{this.props.item}</h2>
        <div className="todo-description">
          {this.props.description}
        </div>

        <div>
          <button className='delete' onClick={this.props.handleRemove}>X</button>
          <button className='complete' onClick={this.props.handleComplete}>C</button>
        </div>
        <div>
            <button onClick={this.handleClick}>{this.state.visible ? 'Slide up' : 'Edit'}</button>
                <TransitionGroup>
                    { this.state.visible ? <TodoForm editListItem={this.props.editListItem}
                                                      id={this.props.id}
                                                      item={this.props.item}
                                                      description={this.props.description}
                                                      cacheThis={this}
                                                      slideUp={this.handleClick.bind(this)}/> : null
                                                       }
                </TransitionGroup>
            </div>
      </div>
      );
  }
}

export default Todo;