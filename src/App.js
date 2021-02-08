import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

const { default: Navbar } = require("./components/Navbar");

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/shop' component={Shop} />
      Hello
    </div>
    </BrowserRouter>
  );
}

export default App;
