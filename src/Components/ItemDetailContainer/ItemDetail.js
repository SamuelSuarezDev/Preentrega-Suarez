import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import { ItemQuantitySelector } from "./Components/ItemQuantitySelector";
import { state } from "../Navbar/Navbar";
import { Description } from "./Components/Description";
import { AddItemButton } from "./Components/AddItemButton";

export const ItemDetail = () => {
  const { arrayProducts } = useProductContext();
  const { id } = useParams(0);
  let product = arrayProducts[0].find((pro) => pro.id == Number(id));
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "28px",
      }}
    >
      <Description />
      <ItemQuantitySelector product={{ ...product }} />
      <AddItemButton product={{ ...product }} />
      {state != 0 ? (
        <Link to={"/category/" + state}>Volver</Link>
      ) : (
        <Link to={"/"}>Volver</Link>
      )}
    </div>
  );
};
