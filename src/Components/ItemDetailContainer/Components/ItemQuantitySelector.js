import React, { useState } from "react";
export let numberTwo = 0;
export const ItemQuantitySelector = (product) => {
  const [number, setNumber] = useState(0);
  product.product.quantity = number;
  const handleChange = () => {
    setNumber(number + 1);
    numberTwo = number + 1;
  };
  const handleRestar = () => {
    if (number > 0) {
      setNumber(number - 1);
      numberTwo = number - 1;
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "15vh",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "30vw",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <button style={{ height: "30px" }} onClick={handleRestar}>
          -
        </button>
        <p>{number}</p>
        <button style={{ height: "30px" }} onClick={handleChange}>
          +
        </button>
      </div>
    </div>
  );
};
