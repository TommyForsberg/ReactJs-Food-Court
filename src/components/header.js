import React, { Component } from 'react';
import './projects.css';
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {  Route, Link } from 'react-router-dom';
import App from './../App';
import Cart from './cart';


class Header extends Component {
  constructor(props) {
    super(props);
    this.updateCart = this.updateCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      sum: 0,
      cart: [],
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  updateCart(dish) {  
    let newSum = this.state.sum + dish.price;
   let myCart = this.state.cart;
    myCart.push(dish)
    this.setState({sum: newSum});
  }

  deleteFromCart(selectedIndex){
    let array = this.state.cart;
    let newSum = this.state.sum - array[selectedIndex].price;
    //this.state.sum -= array[selectedIndex].price;
   array.splice(selectedIndex, 1);
    this.setState({cart: array, sum: newSum});
  }
  render() {
    const title = "Tommys Food Court";
    return (    
      <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand><Link to='/'>{title}</Link></NavbarBrand>    
       
          
          <Nav className="ml-auto">
            <NavItem >
             <h5>Sum: {this.state.sum} <span className="badge badge-warning">{this.state.cart.length}</span></h5>  
            </NavItem>
            <NavItem>
              <NavLink><Link to='/cart'>Go to cart</Link></NavLink>
            </NavItem>
          </Nav>
        
      </Navbar>
      <Route  exact path='/' render={(props) => <App{...props}  updateCart={this.updateCart}  />
    }            />
        <Route path='/cart' render={(props) => <Cart{...props} cart={this.state.cart} deleteFromCart={this.deleteFromCart}/>
        } />
    </div>
     
      
     );
  }
}

export default Header;