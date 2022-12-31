import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartPage from './Components/CartPage/CartPage';

function App() {

  return (
    <div className="App">
      <CartProvider >
      <header>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<CartPage />}/>
        </Routes>
        </BrowserRouter>
      </header>
      </CartProvider>
    </div>
  );
}

export default App;
