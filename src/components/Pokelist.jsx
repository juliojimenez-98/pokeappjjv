import React from "react";

const Pokelist = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p) => (
        <div className="w-full" key={p}>
          <h1 className="text-center pb-2">{p}</h1>
        </div>
      ))}
    </div>
  );
};

export default Pokelist;
