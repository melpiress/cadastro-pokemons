import { useState } from 'react';
import Formulario from './components/Formulario';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const handleAddPokemon = (pokemon) => {
    setPokemons((atual) => [...atual, pokemon]);
  };

  return (
    <div className="pokedex-container">
      <h1 className="pokedex-titulo">Cadastro de Pokémons</h1>

      <div className="pokedex-body">
      <div className="form-container">
        <Formulario onAddPokemon={handleAddPokemon} />
      </div>

      <div className="lista-container">
        <h2 className="pokedex-subtitulo">Pokémons Capturados:</h2>
        <ul className="pokemon-lista">
          {pokemons.map((p, index) => (
            <li key={index} className="pokemon-item" style={
              { backgroundColor: getTipoColor(p.tipo), 
              border: `3px solid ${getTipoColor(p.tipo)}`}}>
              <img src={p.imagem} width={80} alt={p.nome} className="pokemon-imagem" />
              <div>
                <strong className="pokemon-nome">{p.nome}</strong> — 
                Tipo: <span className="pokemon-tipo">{p.tipo}</span>, 
                Poder: {p.poder}
                <br />
                <span className="pokemon-descricao">
                  Descrição: {p.descricao || 'Sem descrição'}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}

function getTipoColor(tipo){
  const cores = {
    fogo: '#f87171',
    agua: '#60a5fa',
    planta: '#4ade80',
    eletrico: '#facc15',
    venenoso: '#a855f7',
    dragao: '#7dd3fc',
    sombrio: '#374151',
    psiquico: '#f472b6',
    gelo: '#bae6fd',
    pedra: '#a1a1aa',
    terrestre: '#92400e',
    lutador: '#b91c1c',
    fantasma: '#6b21a8',
    fada: '#f9a8d4',
    aco: '#94a3b8',
    inseto: '#84cc16',
    normal: '#9ca3af',
    voador: '#93c5fd',
  };

  return cores[tipo?.toLowerCase?.()] || '#ffc4c4';
}

export default App;
