import { useState } from "react";
import './Formulario.css';

const Formulario = ({ onAddPokemon }) => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poder, setPoder] = useState("");

  const handleNome = (e) => setNome(capitalize(e.target.value));
  const handlePoder = (e) => setPoder(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
      if (!response.ok) {
        alert("Pokémon não encontrado na Pokédex!");
        return;
      }

      const data = await response.json();
      const pokemon = {
        nome,
        tipo,
        descricao,
        poder,
        imagem: data.sprites.front_default,
      };

      onAddPokemon(pokemon);

      setNome("");
      setTipo("");
      setDescricao("");
      setPoder("");
    } catch (error) {
      alert("Erro ao buscar Pokémon. Verifique sua conexão.");
    }
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="nome"
          placeholder="Ex: Pikachu, Charmander"
          onChange={handleNome}
          value={nome}
          required
        />

        <label>Descrição:</label>
        <textarea
          name="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva o Pokémon"
        ></textarea>

        <label>Tipo:</label>
        <select name="tipo" onChange={(e) => setTipo(e.target.value)} value={tipo}>
      <option value="">Selecione um tipo</option>
      <option value="inseto">🐛 Inseto</option>
      <option value="sombrio">🌑 Sombrio</option>
      <option value="dragao">🐉 Dragão</option>
      <option value="eletrico">⚡ Elétrico</option>
      <option value="fada">🧚‍♀️ Fada</option>
      <option value="lutador">🥊 Lutador</option>
      <option value="fogo">🔥 Fogo</option>
      <option value="voador">🕊️ Voador</option>
      <option value="fantasma">👻 Fantasma</option>
      <option value="planta">🌿 Planta</option>
      <option value="terrestre">🌋 Terrestre</option>
      <option value="gelo">❄️ Gelo</option>
      <option value="normal">🔘 Normal</option>
      <option value="venenoso">☠️ Venenoso</option>
      <option value="psíquico">🔮 Psíquico</option>
      <option value="pedra">🪨 Pedra</option>
      <option value="aco">⚙️ Aço</option>
      <option value="agua">💧 Água</option>
        </select>

        <label htmlFor="poder">Poder:</label>
        <input
          type="number"
          name="poder"
          placeholder="Nível de poder (0-100)"
          onChange={handlePoder}
          value={poder}
          min={0}
          max={100}
        />

        <input type="submit" value="Cadastrar Pokémon" />
      </form>
    </div>
  );
};

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default Formulario;
