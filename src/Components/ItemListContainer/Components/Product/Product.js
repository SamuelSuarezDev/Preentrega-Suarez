import React from "react";
import { Link } from "react-router-dom";

const Product = ({ title, price, image, to, category }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        height: "auto",
        padding: "10px",
        margin: "5%",
        alignItems: "center",
        backgroundColor: "#dbdbdb",
        borderRadius: "20%",
        boxShadow: "5px 5px 15px black",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "60%",
          height: "50%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <p style={{ fontSize: "30px" }}>{title}</p>
      <p style={{ fontSize: "20px" }}>{price}</p>
      <button style={{ fontSize: "20px" }}>
        <Link to={to}>Ver más</Link>
      </button>
    </div>
  );
};

export default Product;
