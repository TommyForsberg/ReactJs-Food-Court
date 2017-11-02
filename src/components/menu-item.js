import React, {Component} from 'react';
import './menu-item.css';
class MenuItem extends Component{
     
  render() {
    return(
      <div className="card" style={{width: 10 +'rem'}} >
      <img className="card-img-top" src={require('./img/'+ this.props.itemToChildComponent.imagesrc)} alt="Card image cap"/>
      <div className="card-body">
        <h4 className="card-title"> {this.props.itemToChildComponent.name}</h4>
        <p className="card-text">{this.props.itemToChildComponent.price} SEK</p>
        <button class="btn btn-primary" onClick={() => this.props.updateCart(this.props.itemToChildComponent)}>Add to cart</button>
      </div>
    </div>     
      
    ) 
}
}
export default MenuItem;