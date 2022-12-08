//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <header>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
