import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contactus from "./pages/Contactus";
import Header from "./component/Header";
import "./App.css";
import Footer from "./component/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/product/product-details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
