import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ItemQuantitySelector } from "./Components/ItemQuantitySelector";
import { state } from "../Navbar/Navbar";
import { Description } from "./Components/Description";
import { AddItemButton } from "./Components/AddItemButton";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const ItemDetail = () => {
  let array = [];
  const [arrayProducts, setarrayProducts] = useState([]);
  const db = getFirestore();
  const handleDatabase = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      array.push({
        id: doc.id,
        ...doc.data(),
      });
      setarrayProducts(array);
      return;
    });
  };
  handleDatabase();
  const { id } = useParams(0);
  const product = arrayProducts.find((pro) => pro.id === id);
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
      <Description array={arrayProducts} />
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
