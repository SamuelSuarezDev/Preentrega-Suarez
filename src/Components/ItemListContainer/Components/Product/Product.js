import React from "react";
import { Link } from "react-router-dom";

const Product = ({ title, price, image, to, category }) => {
  // eslint-disable-next-line no-restricted-globals
  const width = screen.width;
  return (
    <>
      {width > 768 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90vw",
            border: "5px solid gray",
            background: "#dbdbdb",
            color: "gray",
            textAlign: "center",
            padding: "10px",
            marginTop: "5%",
          }}
        >
          <img
            src={image}
            alt=""
            style={{ width: "20%", objectFit: "cover" }}
          />
          <div style={{ fontSize: "20px", width: "30%" }}>
            <strong>Nombre:</strong>
            <p>{title}</p>
          </div>
          <div style={{ fontSize: "20px", width: "30%" }}>
            <strong>Precio:</strong>
            <p>{price}$</p>
          </div>
          <button
            style={{
              fontSize: "20px",
              background: "none",
              border: "none",
            }}
          >
            <Link to={to}>
              <p style={{ color: "gray" }}>Ver más</p>
            </Link>
          </button>
        </div>
      )}
      {width < 768 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90vw",
            border: "5px solid gray",
            background: "#dbdbdb",
            color: "gray",
            textAlign: "center",
            padding: "10px",
            marginTop: "5%",
          }}
        >
          <img
            src={image}
            alt=""
            style={{ width: "50%", objectFit: "cover" }}
          />
          <div
            style={{
              fontSize: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <strong style={{ width: "50%" }}>Nombre:</strong>
            <p style={{ width: "50%" }}>{title}</p>
          </div>
          <div
            style={{
              fontSize: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <strong style={{ width: "50%" }}>Precio:</strong>
            <p style={{ width: "50%" }}>{price}$</p>
          </div>
          <button
            style={{
              fontSize: "20px",
              background: "none",
              border: "none",
            }}
          >
            <Link to={to}>
              <p style={{ color: "gray" }}>Ver más</p>
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Product;
