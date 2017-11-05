import React, {Component} from 'react';
import './menu-item.css';
class CartItem extends Component{
     
  render() {
     
    return(    
        <div className="card" style={{width: 10 +'rem'}} >
  <img className="card-img-top" src={require('./img/'+ this.props.cartitem.imagesrc)} alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">{this.props.cartitem.name}</h4>
    <h6 class="card-subtitle mb-2 text-muted">{this.props.cartitem.category}</h6>
    <p className="card-text">{this.props.cartitem.price} SEK</p>
    <button class="btn btn-danger" onClick={() => this.props.deleteFromCart(this.props.keyIndex)}>Delete</button>
  </div>
</div>       
    ) 
}
}
export default CartItem;