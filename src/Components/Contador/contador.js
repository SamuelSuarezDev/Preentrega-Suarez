import { React, useState } from "react";

export const Contador = ({}) => {
  const [numero, setNumero] = useState(0);
  const handleChange = () => {
    setNumero(numero + 1);
  };
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
