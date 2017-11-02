import React, { Component } from 'react';
import Header from './components/header';
import MainContent from './components/maincontent';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.updateCart = this.updateCart.bind(this);
  this.state = {
    cart: [],
menu:{},
sum: 0
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
  updateCart(dish) {  
    let newSum = this.state.sum + dish.price;
    let myCart = this.state.cart;
    myCart.push(dish)
    this.setState({sum: newSum});
    console.log('My cart' + myCart[0].price);
  }
  render() {
    return (    
      <div className="App cover-container">
        
        <Header sum = {this.state.sum} />       
       <MainContent menu={this.state.menu} updateCart={this.updateCart} />        
<br/>
      </div>
     );
  }
}

export default App;
