import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleClick(){
    console.log("this is handleclick", this);
    alert("SHAME!!!!");
  }

  handleMouseOver(){
    console.warn("Don't Do it!!!!");
  }

  render() {
    return (
      <div>
        <button 
          onClick={this.handleClick.bind(this)} 
          onMouseOver={this.handleMouseOver}
          className="button"
        />
      </div>
    )
  }
}

export default Button;