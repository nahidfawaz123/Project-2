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
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Occasions" element={<Occasions />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurGoals" element={<OurGoals />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
