import './App.css';
import Routes from './routes'
import PokemonProvider from './context/pokemons/Provider'

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </div>
  );
}

export default App;
