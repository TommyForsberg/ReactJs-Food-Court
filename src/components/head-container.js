import React, {Component} from 'react';
import Submenu from './submenu.js';
import './maincontent.css';

class HeadContainer extends Component{
    render() {
        return (    
          <div className="head-container">
            
            <Header sum = {this.state.sum} />       
           <MainContent menu={this.state.menu} updateCart={this.updateCart} />        
    <br/>
          </div>)
}
}
 
export default HeadContainer;