import './components/normalize.css';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/Notification';

// export const Context = createContext()


const App = () => {
  // const [cart, setCart] = useState([])
  // console.log(cart)

  return (
    <div className="App">
      <header className="header">
        {/* <Context.Provider value={{ cart, setCart}}> */}
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='*' element={<h1>Not Found 404</h1>}/>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationProvider>
        {/* </Context.Provider> */}

      </header>
    </div>
  );
}

export default App;
