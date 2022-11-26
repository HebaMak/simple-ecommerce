import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavouritesContext from "./context/FavouritesContext";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetails from "./pages/productDetails";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <FavouritesContext>
      <Router>
        <h1 className="title">Products</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </FavouritesContext>
  );
}

export default App;
