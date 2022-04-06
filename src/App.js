import './components/normalize.css';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos a la tienda'}/>
      </header>
    </div>
  );
}

export default App;
