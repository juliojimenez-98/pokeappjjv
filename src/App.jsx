import React from "react";
import PokeListIndex from "./components";

const App = () => {
  return (
    <div className="w-full mt-3">
      <h1 className="text-center text-2xl pb-4 font-semibold lg:font-bold lg:text-4xl text-red-700">
        PokeAppJJV
      </h1>
      <div className="w-full"></div>
      <PokeListIndex />
    </div>
  );
};

export default App;
