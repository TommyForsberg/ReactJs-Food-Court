import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MainContent from './maincontent.js';
import Cart from './cart.js';
import App from './../App';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
          <div>
        <Route exact path='/' component={App}/>
        <Route path='/maincontent' component={MainContent}/>
      
      </div>
    );
  }
}

export default Navigation;