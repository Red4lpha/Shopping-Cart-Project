import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

const { default: Navbar } = require("./components/Navbar");

function App() {
  const [items, setItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (cardData) => {
    let newCartItems = [...cartItems];
    newCartItems.push(cardData);
    setCartItems(newCartItems);

    setCartCount(prevState => prevState + 1);
  };

  return (
    <BrowserRouter>
    <div className="">
      <Navbar cartCount={cartItems.length}/>
      <Route exact path='/' component={Home} />
      <Route path='/shop' render={(props) => <Shop {...props} 
      handleClick={addCartItem}/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
