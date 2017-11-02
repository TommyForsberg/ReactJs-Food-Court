import React, {Component} from 'react';
import './menu-item.css';
class CartItem extends Component{
     
  render() {
     
    return(    
        <div className="card" style={{width: 10 +'rem'}} >
  <img className="card-img-top" src={require('./img/hamburger.jpg')} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>       
    ) 
}
}
export default CartItem;