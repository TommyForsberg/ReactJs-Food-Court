import React, { Component } from 'react';
import CartItem from './cartitem.js';
import './projects.css';

class Cart extends Component {
  
  render() {
    
     let cartItem= this.props.cart.map((item, i)=> {
       return (       
         <CartItem cartitem = {item} key={i}/>
       );
     })
     return (
      <div className="cart">
       
        {cartItem}
 
       </div>
      );
   }
}

export default Cart;