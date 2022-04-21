import './components/normalize.css';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  console.log(cart)

  return (
    <div className="App">
      <header className="header">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='*' element={<h1>Not Found 404</h1>}/>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer setCart={setCart} cart={cart}/>}/>
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
