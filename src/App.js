import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const { default: Navbar } = require("./components/Navbar");


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (index) => {
    let newCartItems = [...cartItems];
    let i = newCartItems.length;

    const cardIndex = newCartItems.findIndex((e) => e.itemIndex === index);
    //checks to see if the cardData is already in the array
    if (cardIndex !== -1) {
      newCartItems[cardIndex] = { ...newCartItems[cardIndex], itemIndex: index, quantity: newCartItems[cardIndex].quantity + 1 };
      setCartItems(newCartItems);
    }
    else {
      newCartItems[i] = { ...newCartItems[i], itemIndex: index, quantity: 1 };
      setCartItems(newCartItems);
    }
  };

  const removeCartItem = (cardIndex) => {
    let newCartItems = [...cartItems];
    if (cardIndex > -1) {
      newCartItems.splice(cardIndex, 1);
    }
    setCartItems(newCartItems);
  };

  const increment = (cardIndex) => {
    let newCartItems = [...cartItems];
    let cardItem = newCartItems[cardIndex];
    if (cardIndex > -1 && !(cardItem.quantity > 8)) {
      cardItem.quantity++;
      newCartItems[cardIndex] = { ...newCartItems[cardIndex], cardItem };
      setCartItems(newCartItems);
    }
  };

  const decrement = (cardIndex) => {
    let newCartItems = [...cartItems];
    let cardItem = newCartItems[cardIndex];
    if (cardIndex > -1 && !(cardItem.quantity < 2)) {
      cardItem.quantity--;
      newCartItems[cardIndex] = { ...newCartItems[cardIndex], cardItem };
      setCartItems(newCartItems);
    }
  };

  const openMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('hidden');
  }

  return (
    <BrowserRouter basename="/">
      <Navbar cartCount={cartItems.length} handleMobileClick={openMobileMenu} />
      <Switch>
        <Route exact path={['/', '/shop']} render={(props) => <Shop {...props}
          handleClick={addCartItem} />} /> 
        <Route path='/cart' render={(props) => <Cart
          cartItems={cartItems} handleRemove={removeCartItem} handleIncrement={increment}
          handleDecrement={decrement} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
