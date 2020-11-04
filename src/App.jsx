import React from "react";
import PokeList from "./components";

const App = () => {
  return (
    <div className="w-full mt-3">
      <h1 className="text-center text-2xl font-semibold lg:font-bold lg:text-4xl text-red-700">
        PokeAppJJV
      </h1>
      <PokeList />
    </div>
  );
};

export default App;
