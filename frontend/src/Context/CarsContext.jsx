import React, { useState, createContext } from "react";

export const myContext = createContext();

export default function CarsContext({ children }) {
  const [carData, setcarData] = useState({});

  return (
    <>
      <myContext.Provider value={{ carData, setcarData }}>
        {children}
      </myContext.Provider>
    </>
  );
}
