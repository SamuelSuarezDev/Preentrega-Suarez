import React, { useState } from "react";
import { Link } from "react-router-dom";
import { arrayProducts } from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { Counter } from "./Components/Counter";
import { state } from "../Navbar/Navbar";
import { ArrayMock } from "../ArrayMock/ArrayMock";

const DetailProduct = () => {
  console.log(arrayProducts);
  const { id } = useParams(0);
  console.log(id);
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
      <ArrayMock array={arrayProducts} />
      <p></p>
      <img src={product?.image} alt="" style={{ width: "70%" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{product?.title}</p>
        <p>{product?.price}</p>
        <Counter />
        <button>Comprar</button>
        {state != 0 ? (
          <Link to={"/category/" + state}>Volver</Link>
        ) : (
          <Link to={"/"}>Volver</Link>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
