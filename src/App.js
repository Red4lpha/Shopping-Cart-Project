import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const { default: Navbar } = require("./components/Navbar");

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (cardData) => {
    let newCartItems = [...cartItems];
    let i = newCartItems.length;
   
    const cardIndex = newCartItems.findIndex((e) => e.itemIndex === cardData);
     //checks to see if the cardData is already in the array
    if (cardIndex !== -1){
      newCartItems[cardIndex] = {...newCartItems[cardIndex], itemIndex: cardData, quantity: newCartItems[cardIndex].quantity+1}; 
      setCartItems(newCartItems);
    }
    else{
    newCartItems[i] = {...newCartItems[i], itemIndex: cardData, quantity: 1}; 
    setCartItems(newCartItems);
    }
  };

  useEffect(() => {
    
    console.table(cartItems);
  },[cartItems]);

  return (
    <BrowserRouter>
    <div className="">
      <Navbar cartCount={cartItems.length}/>
      <Route exact path='/' component={Home} />
      <Route path='/shop' render={(props) => <Shop {...props} 
      handleClick={addCartItem}/>}/>
      <Route path='/cart' render={(props) => <Cart  
      cartItems={cartItems}/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
