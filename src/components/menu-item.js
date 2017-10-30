import React, {Component} from 'react';
import './menu-item.css';
class MenuItem extends Component{
     
  render() {
    return(
      
      <div className="col-sm-4 center-text menu-item">
      {this.props.itemToChildComponent.name}<br/>
      {this.props.itemToChildComponent.price} SEK
      <button onClick={() => this.props.updateCart(this.props.itemToChildComponent.price)} className="btn btn-success">Add to cart</button>
      </div>       
    ) 
}
}
export default MenuItem;