import { useState } from 'react'
import Formulario from './components/Formulario';
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);

  const handleAddPokemon = (pokemon) => {
    setPokemons((atual) => [...atual, pokemon]);
  };

  return (
    <div>
      <h1>Cadastro de Pokémons</h1>

      <Formulario onAddPokemon={handleAddPokemon} />

      <h2>Pokémons cadastrados:</h2>
      <ul>
        {pokemons.map((p, index) => (
          <li key={index}>
            <img src={p.imagem} width={80} />
            <strong>{p.nome}</strong> — Tipo: {p.tipo}, Poder: {p.poder}
            <br />
            Descrição: {p.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
