import React, { useState } from "react";

export const Counter = () => {
  const [number, setNumber] = useState(0);
  const handleChange = () => {
    setNumber(number + 1);
  };
  const handleRestar = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  return (
    <div>
      <button onClick={handleRestar}>-</button>
      <p>{number}</p>
      <button onClick={handleChange}>+</button>
    </div>
  );
};
