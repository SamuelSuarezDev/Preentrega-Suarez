import { React, useState } from "react";

export const Contador = ({ handleChange, numero }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Contador
        <span>{numero}</span>
        <button onClick={handleChange}>Sumarle 1</button>
      </div>
    </>
  );
};

export default Contador;
