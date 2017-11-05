import React, { Component } from 'react';
import MainContent from './components/maincontent';
import './App.css';

class App extends Component {
  constructor(){
    super();   
  this.state = {   
menu:{}
  };
  }
  
  componentWillMount(){
this.setState({
  menu:
    {
    "Meat": 
    [
      {
        imagesrc:"hamburger.jpg",
        name: "Hamburger",
        category: "Meat",
        price: 56
      },
      {
        imagesrc:"kebab.jpg",
        name: "Kebab",
        category: "Meat",
        price: 60
      },
      {
        imagesrc:"stake.jpg",
        name: "Stake",
        category: "Meat",
        price: 72
      },
      {
        imagesrc:"taco.jpg",
        name: "Taco Pie",
        category: "Meat",
        price: 70
      }
    ],  
    "Vegetarian": [
      {
        imagesrc:"falafel.jpg",
        name: "Falafel",
        category: "Vegetarian",
        price: 49
      },
      {
        imagesrc:"cheeze.jpg",
        name: "Cheeze Sallad",
        category: "Vegetarian",
        price: 56
      },
      {
        imagesrc:"pasta.jpg",
        name: "Cream Pasta",
        category: "Vegetarian",
        price: 60
      },
    ],  
    "Vegan":  [
      {
        imagesrc:"hummus.jpg",
        name: "Hummus Sandwich",
        category: "Vegan",
        price: 42
      },
      {
        imagesrc:"bean.jpg",
        name: "Bean Sallad",
        category: "Vegan",
        price: 56
      },
      {
        imagesrc:"vstew.jpg",
        name: "Special Stew",
        category: "Vegan",
        price: 70
      },
    ]
  }
})
  }
 
  render() {
    return (    
      <div className="App cover-container">      
       <MainContent menu={this.state.menu} updateCart={this.props.updateCart}  />        
<br/>
      </div>
     );
  }
}

export default App;
