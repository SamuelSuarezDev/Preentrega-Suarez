import React, { useState } from "react";
import { Link } from "react-router-dom";
import { arrayProducts } from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  console.log(arrayProducts);
  const [number, setNumber] = useState(0);
  const { id } = useParams(0);
  console.log(id);
  const handleChange = () => {
    setNumber(number + 1);
  };
  const handleRestar = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  let product = arrayProducts.find((pro) => pro.id == Number(id));
  console.log(product);
  return (
    <div
      style={{
        width: "40%",
        marginLeft: "21%",
        marginTop: "50%",
        display: "flex",
      }}
    >
      <p>
        <Link to={"/"}>Volver</Link>
      </p>
      <img src={product?.image} alt="" style={{ width: "70%" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{product?.title}</p>
        <p>{product?.price}</p>
        <button onClick={handleRestar}>-</button>
        <p>{number}</p>
        <button onClick={handleChange}>+</button>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default DetailProduct;
