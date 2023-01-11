import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../../Context/ProductContext";
export const Description = () => {
  const { arrayProducts } = useProductContext();
  const { id } = useParams(0);
  let product = arrayProducts.find((pro) => pro.id == Number(id));
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <img src={product?.image} alt="" style={{ width: "300px" }} />
        <p>{product?.title}</p>
        <p>{product?.price}$</p>
      </div>
    </div>
  );
};
