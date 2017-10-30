import React, { Component } from 'react';
import './projects.css';

class Header extends Component {
  
  render() {
    const title = "Tommys Food Court";
    return (    
      <div className="row">
        <div className='col-sm'> <h3>{title}</h3></div>
        <div className='col-sm'></div>
        <div  className='col-sm'><span style= {{float: 'right'}} >Go to cart<br/><span>Sum: {this.props.sum}</span></span></div>             
      </div>
      
     );
  }
}

export default Header;