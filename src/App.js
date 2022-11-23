//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <ItemListContainer greeting = "Productos destacados" color = 'green' tamaño = '2.25rem' />
      </header>
    </div>
  );
}

export default App;
