import React, { Component } from 'react';
import './Alink.css';

class Alink extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    let { href, text, handleClick } = this.props;
    return (
      <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }
}

export default Alink;