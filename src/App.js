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
            <Route path='/' element={<h1>HOME</h1>}/>
            <Route path='/bazar' element={<ItemListContainer/>}/>

            <Route path='/detail' element={<ItemDetailContainer />} />

          </Routes>
        </BrowserRouter>
        {/* <ItemListContainer greeting={'Bienvenidos a la tienda'}/> */}
      </header>
    </div>
  );
}

export default App;
