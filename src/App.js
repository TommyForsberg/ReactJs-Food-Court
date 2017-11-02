import React, { Component } from 'react';
import Header from './components/header';
import MainContent from './components/maincontent';
import './App.css';


class App extends Component {
  constructor(){
    super();
    
  this.state = {
    cart: [],
menu:{},

  };
  }
  componentWillMount(){
this.setState({
  menu:
    {
    "Meat": 
    [
      {
        name: "Hamburger",
        category: "Meat",
        price: 56
      },
      {
        name: "Kebab",
        category: "Meat",
        price: 60
      },
      {
        name: "Stake",
        category: "Meat",
        price: 72
      },
      {
        name: "Taco Pie",
        category: "Meat",
        price: 70
      }
    ],  
    "Vegetarian": [
      {
        name: "Falafel",
        category: "Vegetarian",
        price: 49
      },
      {
        name: "Cheeze Sallad",
        category: "Vegetarian",
        price: 56
      },
      {
        name: "Cream Pasta",
        category: "Vegetarian",
        price: 60
      },
    ],  
    "Vegan":  [
      {
        name: "Hummus Sandwich",
        category: "Vegan",
        price: 42
      },
      {
        name: "Bean Sallad",
        category: "Vegan",
        price: 56
      },
      {
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
        {/* <Header sum = {this.props.sum} />        */}
       <MainContent menu={this.state.menu} updateCart={this.props.updateCart}  />        
<br/>
      </div>
     );
  }
}

export default App;
