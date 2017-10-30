import React, { Component } from 'react';
import MenuItem from './menu-item.js';
import './projects.css';
import Footer from './footer';

class Submenu extends Component {
  
  render() {
   
    let dishesItem = this.props.dishes.map((item, i)=> {
      return (       
        <MenuItem updateCart={this.props.updateCart} itemToChildComponent = {item} key={i}/>
      );
    })
    return (
     <div className="col-sm-6 submenu">
      
       {dishesItem}
      
      <Footer/>
      </div>
     );
  }
}

export default Submenu;