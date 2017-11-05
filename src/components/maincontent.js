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
    const categories = [
        {
            title: 'Meat', image:'meat.jpg'
        },
        {
            title: 'Vegetarian', image:'vegetarian.jpg'
        },
        {
            title: 'Vegan', image:'vegan.jpg'
        },
        ];
    if(this.state.showMainmenu===true){
    return(              
            <div className="row">               
            {categories.map(category => 
            
            <div value = {category.title} 
            onClick={() => {this.showSubMenu(category.title)}} className='card col-sm text-center main-category'>  
            <img className="card-img-top" src={require('./img/'+ category.image)}  alt="Card image cap"/>
            <div className="card-block"><p class="card-text">{category.title}</p>
  </div>
            </div>
        )}      
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