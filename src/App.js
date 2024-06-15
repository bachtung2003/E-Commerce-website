import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
import Stores from "./Pages/Stores";
import Services from "./Pages/Services";
import Footer from "./Components/Footer/Footer";
import SingleProduct from "./Pages/SingleProduct";
import ScrollToTop from "./Components/ScrollToTop";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/services" element={<Services />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
