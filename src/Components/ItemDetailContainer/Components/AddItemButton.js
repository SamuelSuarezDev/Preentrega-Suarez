import React from "react";
import { numberTwo } from "./ItemQuantitySelector";
import { useCartContext } from "../../../Context/CartContext";
export const AddItemButton = (product) => {
  const { addItem } = useCartContext();
  const onAdd = () => {
    if (numberTwo > 0) {
      product.product.quantity = numberTwo;
      // eslint-disable-next-line no-restricted-globals
      location.href = "/car";
      addItem(product.product);
    } else {
      alert("No has seleccionado la cantidad de tu producto");
    }
  };
  return (
    <button style={{ padding: "10px 40px", margin: "50px" }} onClick={onAdd}>
      Comprar
    </button>
  );
};
