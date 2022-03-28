import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import ProductDetails from './pages/productDetails';
import Products from './pages/Products';
import FavouritesContext from './context/FavouritesContext';

function App() {
  return (
    <FavouritesContext>
      <Router>
        <h1 className='title'>Products</h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products/>} ></Route>
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='/product/:id' element={<ProductDetails/>} />
        </Routes>
      </Router>
    </FavouritesContext>
  );
}

export default App;
