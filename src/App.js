import './components/normalize.css';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="header">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
