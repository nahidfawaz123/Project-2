import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navr from "./component/Navr";
import Home from "./component/Home";
import Services from "./component/Services";
import Occasions from "./component/Occasions";
import About from "./component/About";
import OurGoals from "./component/OurGoals";
import Favorite from "./component/Favorite";
import Login from "./component/Login";
import ShoppingCart from "./component/shoppingCart";
import Connect from "./component/Connect";
import Footer from "./component/Footer";
import Singup from "./component/Singup";
import Admin from "./component/Admin";
import Items from "./component/Items";
import Orders from "./component/Orders";
import Search from "./home/Search";
import Price from "./component/Price"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navr />
        <Routes>
    
          <Route path="/search" element={<Search />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/priceOption" element={<Price />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Occasions" element={<Occasions />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurGoals" element={<OurGoals />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Singup" element={<Singup />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Items/:id" element={<Items />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
