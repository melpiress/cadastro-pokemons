import { useState } from "react";
import './Formulario.css';

const Formulario = ({onAddPokemon}) => {

  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poder, setPoder] = useState("");
 
  const handleNome = (e) => {
    setNome(e.target.value);
  };

  const handlePoder = (e) => {
    setPoder(e.target.value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
      if (!response.ok) {
        alert("Pokémon não encontrado!");
        return;
      }

      const imagem = await response.json();
      const pokemon = {
        nome,
        tipo,
        descricao,
        poder,
        imagem: imagem.sprites.front_default
      };

      onAddPokemon(pokemon);

      setNome("");
      setTipo("");
      setDescricao("");
      setPoder("");
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar Pokémon");
    }
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome do Pokémon"
            onChange={handleNome}
            value={nome}
          />
        </div>

        <label>
          Descrição:
          <textarea
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição do Pokémon"
          ></textarea>
        </label>

        <label>
          Tipo
          <select name="tipo" onChange={(e) => setTipo(e.target.value)}>
            <option value="inseto">Inseto</option>
            <option value="sombrio">Sombrio</option>
            <option value="dragao">Dragão</option>
            <option value="eletrico">Elétrico</option>
            <option value="fada">Fada</option>
            <option value="lutador">Lutador</option>
            <option value="fogo">Fogo</option>
            <option value="voador">Voador</option>
            <option value="fantasma">Fantasma</option>
            <option value="planta">Planta</option>
            <option value="terrestre">Terrestre</option>
            <option value="gelo">Gelo</option>
            <option value="normal">Normal</option>
            <option value="venenoso">Venenoso</option>
            <option value="psíquico">Psíquico</option>
            <option value="pedra">Pedra</option>
            <option value="aco">Aço</option>
            <option value="agua">Água</option>
          </select>
        </label>

        <div>
          <label htmlFor="poder">Poder</label>
          <input
            type="number"
            name="poder"
            placeholder="Digite o poder do Pokémon"
            onChange={handlePoder}
            value={poder}
            min={0}
            max={100}
          />
        </div>
        <input type="submit" value="Cadastrar Pokémon" />
      </form>
    </div>
  );
};
 
export default Formulario;
 
 