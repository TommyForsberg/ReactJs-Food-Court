import React, {Component} from 'react';
import Submenu from './submenu.js';
import './maincontent.css';

class MainContent extends Component{
    constructor(){
        super();
       this.showMainMenu = this.showMainMenu.bind(this);
      this.state = {
          showMainmenu: true,
          submenuCategory: null     
      };
      }
     
      showSubMenu(category) {
        console.log(category);
        this.setState({showMainmenu: false,submenuCategory: category});
       // this.state.showMainmenu = false;       
    }
    showMainMenu() {
        this.setState({showMainmenu: true});    
    }
   
  render() {
    let menu = this.props.menu;
    const categories = ['Meat','Vegetarian','Vegan'];
    if(this.state.showMainmenu==true){
    return(              
            <div className="row">
            {categories.map(category => <div value = {category} onClick={() => {this.showSubMenu(category)}} className='col-sm text-center main-category '> {category} </div>)}      
        </div>         
    )} 
    else {
        let submenuCategory = this.state.submenuCategory;            
        return <div className="row">
        <Submenu dishes = {menu[submenuCategory]} updateCart={this.props.updateCart} showMainMenu={this.showMainMenu} />
        </div>
    }  
}
}
 
export default MainContent;