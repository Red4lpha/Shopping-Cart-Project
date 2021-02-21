import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

const { default: Navbar } = require("./components/Navbar");

function App() {
  const [items, setItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
    <div className="">
      <Navbar cartCount={cartCount}/>
      <Route exact path='/' component={Home} />
      <Route path='/shop' component={Shop} />
    </div>
    </BrowserRouter>
  );
}

export default App;
