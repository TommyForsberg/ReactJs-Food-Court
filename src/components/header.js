import React, { Component } from 'react';
import './projects.css';
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
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
    const title = "Tommys Food Court";
    return (    
      <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">Tommys Food Court</NavbarBrand>    
       
          
          <Nav className="ml-auto">
            <NavItem >
              <NavLink disabled>Sum: {this.props.sum} </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Go to cart</NavLink>
            </NavItem>
          </Nav>
        
      </Navbar>
      {/* <div className="row">
        <div className='col-sm'> <h3>{title}</h3></div>
        <div className='col-sm'></div>
        <div  className='col-sm'><span style= {{float: 'right'}} >Go to cart<br/><span>Sum: {this.props.sum}</span></span></div>             
      </div> */}
    </div>
     
      
     );
  }
}

export default Header;