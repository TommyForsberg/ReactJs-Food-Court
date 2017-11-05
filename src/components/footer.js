import React, { Component } from 'react';

class Footer extends Component {
  
  render() {
    const title = "<-- Go back";
    return (    
      <div className="row text-center col-12 mx-auto">
        <button onClick={() => this.props.showMainMenu()} className='btn btn-primary btn-lg'> <h3>{title}</h3></button>          
      </div>
     );
  }
}

export default Footer;