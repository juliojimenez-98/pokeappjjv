import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokelist from "./Pokelist";

const PokeListIndex = () => {
  const urlPokemons = "https://pokeapi.co/api/v2/pokemon";
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(urlPokemons).then((res) => {
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, []);
  return (
    <>
      <Pokelist pokemon={pokemon} />
    </>
  );
};

export default PokeListIndex;
