import React, { Component } from 'react';
import './projects.css';

class Footer extends Component {
  
  render() {
    const title = "<-- Go back";
    return (    
      <div className="row">
        <div className='col-sm'> <h3>{title}</h3></div>          
      </div>
     );
  }
}

export default Footer;