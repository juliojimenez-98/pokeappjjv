import axios from "axios";
import React, { useEffect, useState } from "react";

const PokeList = () => {
  const urlPokemons = "https://pokeapi.co/api/v2/pokemon";
  const [pokemon, setPokemon] = useState("");

  axios.get(urlPokemons).then((res) => {
    setPokemon(res.data.results.map((p) => p.name));
    console.log(pokemon);
  });

  return <div>null</div>;
};

export default PokeList;
