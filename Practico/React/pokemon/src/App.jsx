import "./App.css";
import pokemon from "./data/pokemons";
// import Pokemon from "./components/Pokemon";

function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">{pokemon.map(pokemon)}</div>
      </div>
    </>
  );
}

export default App;
