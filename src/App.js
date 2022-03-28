import './components/normalize.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <ItemListContainer greeting={'Bienvenidos a la tienda'}/>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
